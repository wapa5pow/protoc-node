import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CheckRequest } from './generated/health_pb';
import { HealthServiceClient } from './generated/HealthServiceClientPb';
import { getData } from './util';


function App() {
  useEffect(() => {
    const f = async () => {
      const service = new HealthServiceClient('http://localhost:8080', {}, null);
      const request = new CheckRequest()
      request.setName('wapa5pow')
      const data = getData()
      request.setData(data)
      try {
      const response = await service.check(request, {})
        console.log(response.getMessage());
        console.log(JSON.stringify(response.getData()?.toObject()) === JSON.stringify(data.toObject()))
      } catch (err) {
         console.log(err)
      }
    }
    f()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
