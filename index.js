const http=require('http');
const path=require('path');
const fs=require('fs');

const host='127.0.0.1';
// While deployment
const PORT=process.env.PORT || 5000;


//this never works for all types of the files
/* 
//Create server objects
const server= http.createServer((req,res)=> {
	console.log(req.url);
	if(req.url==='/' || req.url==='/home'){
		fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
        if(err) throw err;
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(content);
		});
	}

	else if(req.url==='/about'){
		fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
        if(err) throw err;
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(content);
		});
	}


	else if(req.url==='url/users'){
		const users=[
		{ name:'Netra',age:21},
		{ name:'Hari',age:34}];
       	res.writeHead(200,{'Content/Type':'text/json'});
		res.end(JSON.stringify(users));
	    }

	else{
	//res.writeHead('content/type':'text/html')
	res.write('Hellow world');
	res.end();
    }
});
*/

//Create server objects
const server= http.createServer((req,res)=> {
// Build the file path
let filePath = path.join(
	__dirname,
	'public',
	req.url === '/'? "index.html":req.url);
console.log(filePath);

//Extension of the file
let extname=path.extname(filePath);
console.log(extname);

// Initial content type
let contentType='text/html';

// Check extension and set contentType
switch(extname){

	case ".js":
	  contentType = "text/javascript";
	  break;

	case ".css":
	  contentType = "text/css";
	  break;

	case ".json":
	  contentType = "application/json";
	  break;

    case ".png":
	  contentType = "image/png";
	  break;

	case ".jpg":
	  contentTyp =  "image/jpg";
	  break;

	default:
	  contentType = "text/html";
}

// Check if contentType is text/html but no .html extension
if(contentType == "text/html" && extname == "")filePath +=".html";
console.log(filePath);

// Read file
fs.readFile(filePath,(err,content)=>{
   if(err){
   	if(err.code == 'ENOENT'){
   		// Page not found
   		fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
   			res.writeHead(200,{'Content-Type':'text/html'});
   			res.end(content,'utf8');
   		});
   	}
   	else
   	{
   		// Some server error
   		res.writeHead(500);
   		res.end(`Server Error: ${err.code}`);
   	}
   }
   else{
   	// Success
   		res.writeHead(200,{'Content-Type': contentType});
   	    res.end(content,'utf8');

   }
});
});

server.listen(PORT,host,()=>{
	console.log(`server is running at ${host}:${PORT}`);
});
