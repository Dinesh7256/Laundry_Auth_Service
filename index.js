const express = require('express');
const { PORT } = require('./src/config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/routes/index');

const app = express();
let serverSetupAndStart = async ()=>{
    
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    app.listen(PORT, async()=>{
        console.log(`Sever started at ${PORT}`);
    });
};

serverSetupAndStart();