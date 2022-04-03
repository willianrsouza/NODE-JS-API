const express = require ('express');
const router = express.Router();

// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require('../controllers/controller.js');

/* LISTAR FILMES NO DATA'BASE */
router.get('/details/movie',apiController.details);

/* ADD NOVO FILME */
router.post('/add/movie',apiController.create);

/* ATUALIZAR FILME */
router.put('/update/movie/:id',apiController.update);

/* DELETAR FILME */
router.delete('/delete/movie/:id',apiController.delete);
module.exports = router;

/* LISTAR MOVIES*/
router.get('/listAll',apiController.listAllPIs);