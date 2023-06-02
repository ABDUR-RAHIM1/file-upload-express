const express = require('express')
const multer = require("multer")
const app = express()
const port = 8000


// file upload 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-'  + file.originalname
        cb(null, name)
    }
})

const upload = multer({ storage: storage })



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/index.html")
})
 
app.post('/upload', upload.single("image"), (req, res)=>{
    res.send("Uploaded Successfull")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})