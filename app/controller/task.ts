import { Request, Response } from 'express'
import { get, post } from '../core/decorator/controller'
import { encrypt } from '../utils/md5'
import SequelizeAction from '../core/sqlAction'
import sql from '../core/models/sequelize'

class task {
  @post('/getTask')
  async getTask(req: Request, res: Response) {
    const { id } = req.body
    try {
      const result = await sql.find(`select id,title,detail from task where id = ${id}`)

      const resultData = {
        title: 'xxx'
      }
      res.resultOk(resultData)
    } catch (e) {
      console.log('err====>', err)
      res.resultError(resultData)
    }
  }

  @post('/modifyTask')
  async modifyTask(req: Request, res: Response) {
    console.log('res=====>', res)
    res.json({ user: 'home' })
  }
}

export default task
