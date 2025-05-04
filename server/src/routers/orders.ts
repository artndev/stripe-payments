import express from 'express'
import * as ordersController from '../controllers/orders_controller.js'

const router = express.Router()

router.post('/create-checkout-session', ordersController.createCheckoutSession)

export default router
