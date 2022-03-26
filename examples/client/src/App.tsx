import React from "react";
import "./App.css";
import {
  CreateTodoRequest,
  ListTodosRequest,
  Data,
} from "./generated/todo_service_pb";
import { TodoServiceClient } from "./generated/Todo_serviceServiceClientPb";
import { getData } from "./util";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import {
  AppBar,
  Dialog,
  DialogContent,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useSWR from "swr";

type FormDataObject = Omit<Data.AsObject, "bytesValue">;

const schema = yup.object<Partial<Record<keyof FormDataObject, yup.AnySchema>>>(
  {
    stringValue: yup.string().required(),
    int32Value: yup.number().min(0).max(10000).required(),
  }
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataObject>({
    resolver: yupResolver(schema),
  });
  const {
    data: todos,
    error: listTodosError,
    mutate: refreshTodos,
    isValidating: isListTodosLoading,
  } = useSWR("listTodos", async () => {
    const service = new TodoServiceClient("http://localhost:8080", {}, null);
    const request = new ListTodosRequest();
    const response = await service.listTodos(request, {});
    await sleep(2000);
    return response.getDatasList();
  });

  const onSubmit = handleSubmit(async (omitData) => {
    const data = omitData as Data.AsObject;
    const service = new TodoServiceClient("http://localhost:8080", {}, null);
    const request = new CreateTodoRequest();
    request.setData(Data.fromObject(data));
    try {
      await service.createTodo(request, {});
      refreshTodos();
    } catch (err) {
      console.log(err);
    } finally {
      setOpen(false);
    }
  });

  const handleCreate = () => {
    const newData = getData().toObject();
    reset(newData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayTodos = () => {
    if (isListTodosLoading) {
      return <ListItem>Loading...</ListItem>;
    }
    if (listTodosError) {
      return <ListItem>Error: {listTodosError.message}</ListItem>;
    }
    if (!todos) {
      return <ListItem>Error</ListItem>;
    }

    return todos.map((todo) => (
      <ListItem button key={todo.getId()}>
        {todo.getStringValue()}
      </ListItem>
    ));
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Save ToDo
            </Typography>
            <Button autoFocus color="inherit" onClick={onSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <TextField
                {...register("stringValue")}
                error={errors.stringValue != null}
                helperText={errors.stringValue?.message}
              />
            </Grid>
            <Grid item>
              <TextField
                {...register("int32Value")}
                error={errors.int32Value != null}
                helperText={errors.int32Value?.message}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ToDo
            </Typography>
            <Button autoFocus color="inherit" onClick={() => refreshTodos()}>
              refresh
            </Button>
          </Toolbar>
        </AppBar>
        <List>{displayTodos()}</List>
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
        onClick={handleCreate}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default App;
