const { Router } = require('express')
const router = Router()
const rouletteCtrl = require('../controllers/roulette.controller')
router.get('/all',rouletteCtrl.getRoulettes);
router.get('/:id',rouletteCtrl.getRoulette);
router.put('/:id',rouletteCtrl.openRoulette);
router.put('/close/:id',rouletteCtrl.closeRoulette)
router.put('/assingbet/:id',rouletteCtrl.assingbet)
router.put('/deletebet/:id',rouletteCtrl.deletebet)
router.post('/admin',rouletteCtrl.createRoulettes);
router.delete('/admin/:id',rouletteCtrl.deleteRoulette);
module.exports = router