import express from 'express'
import ServicoController from '../controllers/servico.controller.js'

const router = express.Router()

router.post('/', ServicoController.createServico)
router.get('/', ServicoController.getServicos)

export default router