const express=require ('express')
const app = express ()
const port = 3000

app.get('/hello' , (req,res) =>
 {res.send('Iam creating nodejs Express installation');
});
app.listen(port, () => 
{console.log(" welcome to the server...")
});