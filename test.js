const http = require('http').createServer((req,res)=>{
    
    console.log(req.url);
    
    res.setHeader("Content-Type","text/html");  //讓網頁可使用html語法
    res.write("<meta charset='UTF-8'>");  //設置UTF-8編碼，讓中文字可正常顯示
    res.write('<h1>Hi!客人</h1>');  //加上h1標籤測試效果
    res.end(); 

}); 

http.listen(3000);