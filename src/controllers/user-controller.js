const { response } = require('express')

const{ UserServices } = require('../services/index');

const userServices = new UserServices();

const create = async(req, res)=>{
    try{
        const response = await userServices.createUser({
            username: req.body.username,
            mobile_number: req.body.mobile_number
        });
        return res.status(201).json({
            data:response,
            success: true,
            message: "Successfully create user",
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to create a city',
            err: error
        });
    }
}

module.exports = {
    create,
}