var http=require('http');
var querystring=require('querystring');
var name,email;
http.createServer(function(req,res){
    var data1="";
    req.on('data',function(chunk){
        console.log(chunk);
        data1 += chunk;
        console.log("Data is string"+data1);
    });
    req.on('end',function(){
        q=querystring.parse(data1);
        console.log(q);
        name="Arvind";
        email="arvindcb.21aim@kongu.edu";
        res.write("Hello "+name+"your mail id is :"+email);
        res.end();
    });
}).listen(8080);
console.log("server has started..");