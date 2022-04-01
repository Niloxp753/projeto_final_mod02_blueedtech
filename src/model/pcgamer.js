import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const hardwares = connection.define('hardwares',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    fabricante: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    partnumber: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    preco: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTabletName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false
})