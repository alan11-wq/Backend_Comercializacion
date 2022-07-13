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


ruta.get('/bd/:id', (req,res)=>{
    const {id}=req.params;
    let query = "Select * from Prueba where id_prueba=?"
    consulta.query(query,[id],(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})

ruta.delete('/bdborrar/:id', (req,res)=>{
    const {id}=req.params;
    let query = "Delete from Prueba where id_prueba=?"
    consulta.query(query,[id],(err,rows)=>{
        if(!err) res.json("Registro eliminado")
        else
            console.error(err)
    })
})


ruta.post('/bdinsertar', (req,res)=>{
    const {id_prueba,nombre_prueba,descripcion_prueba}=req.body;
    let query = "INSERT INTO `proyectobd`.`Prueba` (`id_prueba`, `nombre_prueba`, `descripcion_prueba`) VALUES ('"+id_prueba+"','"+nombre_prueba+"','"+descripcion_prueba+"');"
    consulta.query(query,(err,rows)=>{
        if(!err) res.json("Registro Insertado")
        else
            console.error(err)
    })
})


ruta.put('/bdactualizar', (req,res)=>{
    const {id_prueba,nombre_prueba,descripcion_prueba}=req.body;
    let query = "UPDATE `proyectobd`.`Prueba` SET `id_prueba` = '"+id_prueba+"', `nombre_prueba` = '"+nombre_prueba+"', `descripcion_prueba` = '"+descripcion_prueba+"' WHERE (`id_prueba` = '"+id_prueba+"')"
    consulta.query(query,(err,rows)=>{
    if(!err) res.json("Registro Actualizado")
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