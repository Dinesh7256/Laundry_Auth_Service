const { op } = require('sequelize');

const { user } = require('../models/index');

class UserRepository{
    async createUser(data){
        try{
            const name = await user.create(data);
            return name;
        }
        catch(error){
            console.log("Something went at repository layer");
            throw error;
        }  
    }

}
module.exports = UserRepository;