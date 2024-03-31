const db = require('./db')

const Post = db.sequelize.define('Postagens', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    conteudo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }
})

Post.sequelize.sync().then(() => {
    console.log('Tabelas criadas com sucesso!');
}).catch(err => {
    console.error('Erro ao criar tabelas:', err);
});

module.exports = Post
