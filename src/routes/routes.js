import express from 'express'
import { getDetalhes, getIndex, postPesquisa } from '../controller/CatalogoController.js'

export const routes = express.Router()

routes.get("/", getIndex)
routes.get("/detalhes/:id", getDetalhes)
routes.post("/pesquisa", postPesquisa)
// routes.get('/apagar/:id', getDeletar)

// routes.get('/criar', getCriar)
// routes.post('/criar', postCriar)

// routes.get('/editar/:id', getEditar)
// routes.post('/editar/:id', postEditar)