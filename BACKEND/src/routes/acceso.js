const {Router} = require ('express');
const consulta= require ('../config/conexionbd');
const ruta = Router();

ruta.get('/bd', (req,res)=>{
    let sql = "Select * from Roles"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

ruta.get('/usuariorol', (req,res)=>{
    let sql = "Select Usuarios.usuario, Roles.descripcion_rol from Usuario_Rol inner join Roles,Usuarios where Usuario_Rol.id_rol=Roles.id_rol and Usuario_Rol.id_usuario=Usuarios.id_usuario"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

ruta.get('/datosusuario', (req,res)=>{
    let sql = "Select * from Datos_Usuario"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

ruta.get('/direccionusuario', (req,res)=>{
    let sql = "Select * from Direccion_Usuario"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})


ruta.get('/usuarios', (req,res)=>{
    let sql = "Select * from Usuarios"
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})


//PRINCIPALES
ruta.get('login', (req,res)=>{res.send('RUTA LOGIN')})
ruta.get('recuperar', (req,res)=>{res.send(' RUTA RECUPERAR')})
ruta.get('home', (req,res)=>{res.send('RUTA HOME')})


module.exports = ruta;