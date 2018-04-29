import { Request, Response } from 'express'

import sql from '../core/models/sequelize'
import { get, post } from '../core/decorator/controller'

class Home {
  @post('/home')
  async home(req: Request, res: Response) {
    const { date, category } = req.body
    const selectDate = date ? `and date = '${date}'` : ''
    const selectCategory = category ? `and category = '${category}'` : ''

    const query = `select id, status, title, label, category, date from task where id is not null ${selectDate} ${selectCategory}`

    try {
      const [resultData] = await sql.query(query)
      res.resultOk(resultData)
    } catch (e) {
      console.log('home request error', e)
      res.resultError('error')
    }
  }
}

export default Home
