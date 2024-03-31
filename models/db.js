const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'database.sql'
})


module.exports ={
    Sequelize:Sequelize,
    sequelize: sequelize
}