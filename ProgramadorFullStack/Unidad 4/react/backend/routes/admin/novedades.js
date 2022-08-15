var express = require ('express');
var router = express.Router();

var novedadesModel = require('./../../models/novedadesModel');//unidad 6
const { route } = require('./login');

router.get('/', async function(req, res, next){  //funcion async no esta en el pdf
    var novedades = await novedadesModel.getNovedades(); //unidad 6
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,//en el video pone persona y no usuario
        novedades //unidad 6
    });
});


router.get('/agregar', (req, res, next) =>{
    res.render('admin/agregar' ,{
        layout: 'admin/layout'
    })
} )
module.exports = router;


router.post('/agregar', async(req, res, next) =>{
    
    try{
        if(req.body.producto != "" && req.body.descripcion != "" && req.body.valor != ""){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        }else{
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    }catch(error){
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error:true,
            message: 'No se cargo la novedad'
        })
    }
})



