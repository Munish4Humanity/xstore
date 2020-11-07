const express=require('express')
const app=express()

app.get('/',function(req,res){
return res.send('Hellow World');
}
)

app.listen(3000, function(){
    console.log('App listening on port 3000!');
})