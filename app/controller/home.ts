import { Request, Response } from 'express'

import sql from '../core/models/sequelize'
import { get, post } from '../core/decorator/controller'

class Home {
    @post('/home')
    async home(req: Request, res: Response) {
        const { date, category } = req.body
        const selectDate = date ? `and date = '${date}'` : ''
        const selectCategory = category ? `and category = '${category}'` : ''

        const query = `select * from task where id is not null ${selectDate} ${selectCategory}`
        const [resultData] = await sql.query(query)

        res.json(resultData)
    }
}

export default Home
