const http = require('http').createServer((req,res)=>{
    //在這裡設定伺服器接收到客戶端請求後的動作。
    
    //伺服器回應的內容
    res.write('Hi!'); 
    res.end(); 

}); 

http.listen(3000);