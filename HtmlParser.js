const ejs = require('ejs'); 

class HtmlParser {
    static async Parse(table){//carregando tabela e passando p/ html
        return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows});
    }
}

module.exports = HtmlParser;