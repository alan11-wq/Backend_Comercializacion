const {Router} = require ('express');
const consulta = require ('../config/conexionbd')
const ruta = Router();

ruta.get('/tiendas', (req,res)=>{
    let sql = "Select * from Tienda"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})


//ALTAS
ruta.get('tienda', (req,res)=>{res.send('ALTA TIENDA')})
ruta.get('producto', (req,res)=>{res.send('ALTA PRODUCTO')})
ruta.get('categoria', (req,res)=>{res.send('ALTA CTEGORIA')})
ruta.get('usuario', (req, res)=>{res.send('ALTA USUARIO')})




module.exports = ruta;