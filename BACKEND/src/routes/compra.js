const {Router} = require ('express');
const consulta = require("../config/conexionbd");
const ruta = Router();

ruta.get('/compras', (req,res)=>{
    let sql = "Select * from Compra"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

//COMPRA
ruta.get('envio', (req,res)=>{res.send('FORMULARIO ENVIO')})
ruta.get('pago', (req,res)=>{res.send('FORMULARIO PAGO')})
ruta.get('confirmacion', (req,res)=>{res.send('CONFIRMACION COMPRA')})



module.exports = ruta;