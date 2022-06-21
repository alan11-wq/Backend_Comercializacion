const {Router} = require ('express');
const consulta = require ('../config/conexionbd')
const ruta = Router();


ruta.get('/all', (req,res)=>{
    let sql = "Select * from Categoria"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

ruta.get('/productos', (req,res)=>{
    let sql = "Select * from Producto"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

//CATEGORIAS
ruta.get('audioyvideo', (req,res)=>{res.send('RUTA AUDIO Y VIDEO')})
ruta.get('computo', (req,res)=>{res.send('RUTA CÓMPUTO')})
ruta.get('exclusivos', (req,res)=>{res.send('RUTA EXCLUSIVOS')})
ruta.get('gamers', (req,res)=>{res.send('RUTA GAMERS')})
ruta.get('hogar', (req,res)=>{res.send('RUTA HOGAR')})
ruta.get('saludybelleza', (req,res)=>{res.send('RUTA SALUD Y BELLEZA')})
ruta.get('telefonia', (req,res)=>{res.send('RUTA TELEFONIA')})



module.exports = ruta;