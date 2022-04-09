const fs = require("fs");
const util = require('util');

class Reader {
    constructor(){
        //resolve o problema do callback
        this.reader = util.promisify(fs.readFile); 
    } //não dá pra trabalhar com async/await  - pois readFile não trabalha com promises

    async Read(filepath){
        try {
            return await this.reader(filepath, "utf8");
        } catch (err) {
            return undefined;
        }
    }
}

module.exports = Reader;