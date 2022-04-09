const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

const lector = new Reader();

const writer =  new Writer();

async function main(){
    //lendo a tabela 
    let data = await lector.Read("./user.csv");

    //convertendo em JS
   let dataProcessor = Processor.Process(data);
   let users = new Table(dataProcessor);

   //convertendo em html
   const html = await HtmlParser.Parse(users);
   
   //escrevendo data e nome do arq. html
    writer.Write(Date.now() + ".html", html);

    //convertendo arq. em pdf
    PDFWriter.WritePDF(Date.now() + ".pdf", html);

}

main();