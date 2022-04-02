import { hardwares } from "../model/pcgamer.js"

let pcgamers

export const getIndex = async (req, res) => {
    try {
        pcgamers = await hardwares.findAll()
        res.render('index.ejs', {
            pcgamers
        })
    }

    catch(err){
        console.log(err.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const pcgamer = await hardwares.findByPk(req.params.id)
        res.render ('detalhes.ejs', {
            pcgamer
        })
    }

    catch(err) {
        res.send(err.message)
    }

}

// export const postPesquisa = async (req, res) => {
//     try {
//         pcgamers = await hardwares.findAll()
//         const pesquisa = req.body
//         pcgamers.forEach(element => {   
//             element.filter((crt)=>{
//                 crt === pesquisa.pesquisar
//             })
//         });
//         res.redirect('/')

//     }

//     catch(err) {
//         res.send(err.message)
//     }

// }



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