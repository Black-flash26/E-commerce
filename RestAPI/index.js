const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const userRoute = require("./Routes/user")


mongoose.connect("mongodb+srv://Ayush:sNYFhzmlvao8NHUT@cluster0.vq9bpiz.mongodb.net/?retryWrites=true&w=majority")
.then(
    ()=>{
        console.log("DBconnection successfull");
    })
.catch((err) =>{

    console.log(err)

}
)

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(5000, ()=>{
    console.log('Backend server is running.');
})