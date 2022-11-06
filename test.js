const fs = require('fs'); //載入檔案模組
const http = require('http').createServer((req,res)=>{

    fs.readFile('./index.html',(error,data)=>{
        error? console.log(error) : res.write(data); //發生錯誤便打印錯誤資料，否則回應檔案。
        res.end();
    });

}); 

http.listen(3000);