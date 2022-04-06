import Sequelize from "sequelize"
import {
    hardwares
} from "../model/pcgamer.js"

let pcgamers

export const getIndex = async (req, res) => {
    try {
        pcgamers = await hardwares.findAll({
            order: [
                ["fabricante", "ASC"]
            ]
        })
        res.status(200).render('index.ejs', {
            pcgamers,
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const pcgamer = await hardwares.findByPk(req.params.id)
        res.status(200).render('detalhes.ejs', {
            pcgamer
        })

    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const postPesquisa = async (req, res) => {

    try {
        const pesquisa = req.body.pesquisar
        pcgamers = await hardwares.findAll({
            where: {
                modelo: {
                    [Sequelize.Op.iLike]: `%${pesquisa}%`
                }
            }
        })

        if (pcgamers.length > 0) {
            res.status(200).render('index.ejs', {
                pcgamers
            })
        } else {
            res.status(404).render('404.ejs')
        }



    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }

}

export const getDeletar = async (req, res) => {
    try {
        await hardwares.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect('/')
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }

}

export const getCriar = (req, res) => {
    res.status(200).render("criar.ejs")
}

export const postCriar = async (req, res) => {
    try {
        const {
            modelo,
            img,
            fabricante,
            descricao,
            preco
        } = req.body
        await hardwares.create({
            modelo,
            img,
            fabricante,
            descricao,
            preco
        })
        res.status(200).redirect('/')

    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getEditar = async (req, res) => {
    const pcgamer = await hardwares.findByPk(req.params.id)
    res.status(200).render('editar.ejs', {
        pcgamer
    })
}

export const postEditar = async (req, res) => {
    try {
        const {
            modelo,
            img,
            fabricante,
            descricao,
            preco
        } = req.body
        await hardwares.update({
            modelo: modelo,
            img: img,
            fabricante: fabricante,
            descricao: descricao,
            preco: preco
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect('/')

    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}