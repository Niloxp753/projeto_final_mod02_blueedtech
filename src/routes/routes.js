import express from 'express'
import { getDetalhes, getIndex, postPesquisa } from '../controller/CatalogoController.js'

export const routes = express.Router()

routes.get("/", getIndex)
routes.get("/detalhes/:id", getDetalhes)
routes.post("/pesquisa", postPesquisa)
// routes.get("/deletar/:id", getDeletar)