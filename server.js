const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./db/data.json');

app.use(cors({
    origin: "*",
    methods: ['GET']
}))

app.get("/members", (req, res) => {
    if(!data.results){
        res.status(503).json({message: "Something wrong with the request, try later"})
    }else{
        res.json(data.results).status(200);
    }
})

app.get("/members/:email", (req, res) => {
    const findMember = data.results.find(member => member.email === req.params.email);

    if(!findMember){
        res.status(404).json({message: "Member not found"});
    }else{
        res.json(findMember).status(200);
    }
})

app.listen(9999, () => {
    console.log("🔥 Server is running at port: 9999")
})