const express=require ('express')
const app = express ()
const port = 3000

//Database setting
var mysql = require ('mysql')
var connecting = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "furiecnd",
    database: "readyassist",
}

var connect = mysql.createConnection(connecting)

app.get('/candidates',(req,res) =>{
    let sql ='select * from candidates'
    connect.query(sql,function(error,data){
        if(error){
            error()
            res.send('no access')
        }
          let response ={
              data : data
          }
            res.send(response)
    })
             
});


app.get('/candidates/:id' , (req,res) =>{
    let sql ='select * from candidates where id =?'
    connect.query(sql,[req.params.id],function(error,data){
        if(error) {
                 error()

       res.send('Sorry You cannot access this file ');
        }
 let response = {
     data: data
               }
    res.send(response);

  })
});

app.get('/employees/:name' , (req,res) =>{
     let sql ='select * from employees where name =?'
     connect.query(sql,[req.params.name],function(error,data){
         if(error) {
         res.status(500);
         let errMsg = {
          error: error
         };
        res.send(`Sorry You cannot access this file ${errMsg}`);
         }
  let response = {
      data: data
                }
     res.send(response);

   })
});

app.get('/trainees/:name' , (req,res) =>{
    let sql ='select * from trainees where name =?'
    connect.query(sql,[req.params.name],function(error,data){
        if(error) {
        res.status(500);
        let errMsg = {
         error: error
        };
       res.send(`Sorry You cannot access this file ${errMsg}`);
        }
 let response = {
     data: data
               }
    res.send(response);

  })
});

app.get('/candidates/:college',(req,res)=>{
   let sql='select * from candidates where college=?'
   if (req.query.college){
       sql = sql + req.query.college;
   }
   connect.query(sql,function(error,data,fields){
   if(error){
       error()
   };
   res.send('you cannot access')
   
         let response = {
             data: data
         }
         res.send(response);
})

});


app.listen(port,  () => 
{console.log("Hello Pc! welcome to the server...")
});

