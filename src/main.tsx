import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.js'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3000; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);
