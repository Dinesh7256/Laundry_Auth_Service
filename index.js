const express = require('express');


const { PORT } = require('./src/config/serverConfig');
const bodyParser = require('body-parser');

let serverSetupAndStart = async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, async()=>{
        console.log(`Sever started at ${PORT}`);
    });
};

serverSetupAndStart();