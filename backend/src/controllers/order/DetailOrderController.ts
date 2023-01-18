import { Request, Response } from 'express'
import { DetailOrderService } from '../../services/order/DetailOrderService'

class DetailOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.body;
        console.log('3', order_id)

        const detailOrderService = new DetailOrderService();

        const orders = await detailOrderService.execute({
            order_id
        })

        console.log('4', orders)

        return res.json(orders);
    }
}

export { DetailOrderController }