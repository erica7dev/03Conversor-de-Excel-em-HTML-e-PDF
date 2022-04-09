class Processor {
    static Process(data){
        let a = data.split("\r\n"); //retorna array separado por enter
        var rows = [];

        // Array de arrays que contém o conteúdo de cada linha separado por "," 
        a.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);//add arr
        });

        return rows;
    }
}

module.exports = Processor;

