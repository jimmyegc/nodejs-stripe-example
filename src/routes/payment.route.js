import { Router } from 'express'
import { createSession } from '../controllers/payment.controller.js'

const router = Router()

// Create Order
router.post('/create-checkout-session', createSession) 

// When the payment was success
router.get('/success', (req, res) => {
  res.redirect('/success.html')
}) 

// When user cancel the buy
router.get('/cancel', (req, res) => {
  res.redirect('/')
}) 

export default router