import { resolveInclude } from "ejs"
import { hardwares } from "../model/pcgamer.js"

let pcgamers

export const getIndex = async (req, res) => {
    try {
        pcgamers = await hardwares.findAll({
            order: [["modelo","ASC"]]
        })
        res.status(200).render('index.ejs', {
            pcgamers,
        })
    } catch(err) {
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
        
    } catch(err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const postPesquisa = async (req, res) => {
    try {
         pcgamers = await hardwares.findAll()
        const pesquisa = req.body
        res.redirect('/')
       
        
    } catch(err) {
        res.send(err.message)
    }

}



// export const getDeletar = (req, res) => {
//     try {
//         await hardwares.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.redirect('/')
//     }
//     catch(err){
//         res.send(err.message)
//     }
    
// }