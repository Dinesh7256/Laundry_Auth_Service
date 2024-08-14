const { UserRepository } = require('../repository/index');

class UserServices{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async createUser(data){
        try{
            const name  = await this.userRepository.createUser(data);
            return name;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}
module.exports = UserServices;