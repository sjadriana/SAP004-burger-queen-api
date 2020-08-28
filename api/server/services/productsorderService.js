import database from '../src/models'

class ProductsOrderService {
  static async findByOrderId(orderId) {
    try {
      return await database.ProductsOrder.findAll({where:{orderId}})
    } catch (error) {
      throw error
    }
  }
  static async add(orderId, newProductsOrder) {
  try {
    return await database.ProductsOrder.create({...newProductsOrder, orderId})
  } catch (error) {
    throw error
  }
}

}
export default ProductsOrderService 