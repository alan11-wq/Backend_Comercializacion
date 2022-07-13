const {Router} = require ('express');
const consulta = require ('../config/conexionbd');
const ruta = Router();

//CONSULTA PRODUCTO POR ID

ruta.get('/consulta/:id',(req,res)=>{
    const {id}=req.params;
    let query = "Select * from Producto where id_producto=?"
    consulta.query(query,[id],(err,rows)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
})


//BAJA PRODUCTO POR ID

ruta.delete('/baja/:id', (req,res)=>{
    const {id}=req.params;
    let query = "Delete from Producto where id_producto=?"
    consulta.query(query,[id],(err,rows)=>{
        if(!err) res.json("Producto eliminado")
        else
            console.error(err)
    })
})


//ALTA NUEVO PRODUCTO

ruta.post('/alta', (req,res)=>{
    const {id_producto, nombre_producto, descripcion_producto, precio_producto, stock_producto, id_categoria}=req.body;
    let query = "INSERT INTO `proyectobd`.`Producto`(`id_producto`,`nombre_producto`,`descripcion_producto`,`precio_producto`,`stock_producto`, `id_categoria`) VALUES ('"+id_producto+"','"+nombre_producto+"','"+descripcion_producto+"', '"+precio_producto+"', '"+stock_producto+"', '"+id_categoria+"');"
    consulta.query(query,(err,rows)=>{
        if(!err) res.json("Nuevo producto registrado")
        else
            console.error(err)
    })
})

//ACTUALIZACION PRODUCTO YA REGISTRADO

ruta.put('/actualizar', (req,res)=>{
    const {id_producto,nombre_producto,descripcion_producto, precio_producto, stock_producto, id_categoria}=req.body;
    let query = "UPDATE `proyectobd`.`Producto` SET `id_producto` = '"+id_producto+"', `nombre_producto` = '"+nombre_producto+"', `descripcion_producto` = '"+descripcion_producto+"', `precio_producto` = '"+precio_producto+"', `stock_producto` = '"+stock_producto+"', `id_categoria` = '"+id_categoria+"' WHERE (`id_producto` = '"+id_producto+"')"
    consulta.query(query,(err,rows)=>{
        if(!err) res.json("Producto Actualizado")
        else
            console.error(err)
    })
})


module.exports = ruta;