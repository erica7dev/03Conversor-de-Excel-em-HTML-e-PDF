const fs = require('fs');
const util = require('util');

class Writer {
    constructor(){
        //permitindo o writeFile trabalhar com async/await
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filename, data){
        try{
            await this.writer(filename, data);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
        
    }
}

module.exports = Writer;