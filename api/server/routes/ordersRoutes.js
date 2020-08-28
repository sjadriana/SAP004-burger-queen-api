import { Router } from 'express'
import OrderController from '../controller/orderController'

const router = Router()
router.get('/', OrderController.all)
router.post('/', OrderController.add)
router.get('/:id', OrderController.getById)
router.put('/:id', OrderController.updatedOrder)
router.delete('/:id', OrderController.deleteOrder)
router.get('/:id/items', OrderController.getItemsById)
router.post('/:id/items', OrderController.createItem)

export default router