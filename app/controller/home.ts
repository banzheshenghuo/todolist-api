import { Request, Response } from 'express'

import sql from '../core/models/sequelize'
import { get, post } from '../core/decorator/controller'

class Home {
    @post('/home')
    async home(req: Request, res: Response) {
        const { navigator } = req.body
        console.log('navigator', req.user)
        res.json({ user: 'home' })
    }
}

export default Home
