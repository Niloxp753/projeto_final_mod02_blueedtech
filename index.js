import express from 'express'
import path from 'path'
import {
    routes
} from './src/routes/routes.js'

let __dirname = path.resolve(path.dirname(''))

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log('Meu servidor esta rodando na porta ' + port)
})