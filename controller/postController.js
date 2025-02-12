// Milestone 1
// Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
// All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router 
// (al momento restituiscono solo dei messaggi).
// Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
// Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.

// Milestone 2
// Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.
// Importiamo questo file in cima al controller.
// Ora passiamo ad implementare le logiche delle nostre CRUD:
// Index dovrà restituire la lista dei post in formato JSON
// Show dovrà restituire un singolo post in formato JSON
// Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
// Bonus
// Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
// In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore,
// sempre in formato JSON.

//Richiamo l'array di oggetti presente nel file posts
const posts = require("../data/posts");


//Creo le diverse funzioni da far eseguire succesivamente al server
function index(req, res) {
    res.json(posts)
};

function show(req, res) {
    if (req.params.id) {
        res.json(posts.find((element) => element.id = req.params.id))
    }
};

function store(req, res) {
    res.send("Creazione di un nuovo post")
};

function update(req, res) {
    res.send("Modifica integrale del post n." + req.params.id)
};

function modify(req, res) {
    res.send("Modifica parziale del post n." + req.params.id)
};

// Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

function destroy(req, res) {
    const id = parseInt(req.params.id)
    filteredPost = posts;
    if (id) {
        let postToDelete = posts.find((post) => post.id === id);
        let indexPostToDelete = posts.indexOf(postToDelete)
        filteredPost.splice((indexPostToDelete), 1)

        console.log(filteredPost)
    }
    res.sendStatus(204)
};

//Esportazione
module.exports = { index, show, store, update, modify, destroy }


