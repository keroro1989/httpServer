const fs = require('fs'); 
const http = require('http').createServer((req,res)=>{

    let path =  './';  //宣告path變數儲存要回應的網頁路徑

//根據請求的網址判斷要回應哪個網頁
    switch(req.url){
        case "/":
            path += 'index.html';
            break;
        case "/fish":
            path += 'cat.html'
            break;
        default:
            path += '404.html';
            break;
    };
    
//記得修改fs.readFile第一個變數為path
    fs.readFile(path,(error,data)=>{
        error? console.log(error) : res.write(data); 
        res.end();
    });

}); 

http.listen(3000);