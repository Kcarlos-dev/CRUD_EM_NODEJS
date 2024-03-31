const express =  require('express')
const bodyParser = require("body-parser")
const app = express()
const Post = require('./models/Post')


app.set('view engine', 'ejs')

app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/colecao', (req,res)=>{
    
    Post.findAll().then((posts) => {
        res.render('colecao', { posts: posts})
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    })
    
})
app.get('/editar/:id',(req,res)=>{
    res.render("editar")
   //const edit = Post.findByPk({id:req.params.id})

})
app.post('/up',function(req,res){
    Post.update({
        titulo:req.body.up_titulo_postage,
        conteudo:req.body.up_postage
    },{where:{id:req.body.id_edit}}).then(function(){
        res.redirect('/colecao')
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    })

})
app.get('/delete/:id',(req,res)=>{
    Post.destroy({where:{id:req.params.id}}).then(function(){
        res.send(`Postagem deletada com sucesso <a href="/">Cria um novo post</a>`)
    }).catch(function(erro){
        res.send("Não existe essa postagem")
    })
})

app.post('/add', function(req,res){

    Post.create({
        titulo:req.body.titulo_postage,
        conteudo:req.body.postage

    }).then(function(){
        res.redirect('/colecao')
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    })


})

/*
app.post('/add', function(req,res){
    let titulo = req.body.titulo_postage
    let conteudo = req.body.postage

    res.render('postagens',{titulo,conteudo})

})*/


app.listen(3000,()=>{
    console.log(`Serve rodando na porta 3000`)
})

