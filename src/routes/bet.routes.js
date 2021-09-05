const { Router } = require('express')
const router = Router()
const betCtrl = require('../controllers/bet.controller')
const rouletteCtrl = require('../controllers/roulette.controller')
router.post('/create',betCtrl.createBet);
router.get('/:id',betCtrl.getBet);
router.get('/',betCtrl.getBets);
router.delete('/:id',betCtrl.deleteBet);
module.exports = router;