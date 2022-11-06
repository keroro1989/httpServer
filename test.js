const http = require('http').createServer((req,res)=>{
    //在這裡設定伺服器接收到客戶端請求後的動作。

    console.log(req.url); //印出客戶端網址
    console.log(req.method); //印出客戶端向伺服器發出請求的方法

}); 

http.listen(3000);