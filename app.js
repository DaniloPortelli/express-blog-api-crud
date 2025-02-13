//variabile per richiamare le funzionalità di express
const express = require("express");

//Variabile per creare l'istanza di express
const app = express();

//Variabile per porta di ascolto del server
const port = 3000;

//Importazione delle rotte dalla cartella routers
const postsRouter = require("./routers/posts");

//funzione per registrare in express i body-parser che vogliamo utilizzare,
//ovvero delle funzioni che aiutano il server a decodificare il request body
app.use(express.json());


// app.get("/", (req, res) => {
//     res.send("hello")
// });


app.use("/posts", postsRouter)



app.listen(port, () => {
    console.log("prova")
})