import express from 'express'
import path from 'path'
import { routes } from './src/routes/routes.js'

const __dirname = path.resolve(path.dirname('')) 
const app = express()
const port = process.env.PORT || 3002

app.set('view engine', 'ejs')
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => {
    console.log('Meu servidor esta rodando na porta ' + port)
})

