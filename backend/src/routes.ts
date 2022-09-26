import { Router, Request, Response } from 'express';

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Erro ao fazer essa requisição')
    return res.json({ ok: true })
})

export { router }
