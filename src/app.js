import express from "express";


/**
 * Instancia do express
 */
const app = express()
/**
 * Váriável de escolha da porta
 */
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`)
})

/**
 * Middleware para reconhecimento do formato JSON para a aplicação
 */
app.use(express.json())


