import express, { Request, Response, NextFunction, Express, Router } from 'express'
import _ from 'lodash'
import * as controllers from '../controller'
import sql from '../core/models/sequelize'

const router: Router = express.Router()

function routers(app: Express) {
  _.forOwn(controllers, (controller: any, key) => {
    const { routes: modules } = new controller()

    _.forOwn(modules, module => {
      const path = module.path
      const method = module.method
      const handler = module.handler
      app.use(
        '/',
        router[method](path, async function(req: Request, res: Response) {
          try {
            const { _AT = '' } = req.cookies
            const isLogin = path === '/login' ? true : false

            const resultOk = (resultData: any) => {
              res.json({ success: 1, data: resultData })
            }

            const resultError = (err: any) => {
              res.json({ success: 0, error: err })
            }
            res = Object.assign(res, { resultOk, resultError })

            if (isLogin) {
              await handler(req, res)
              return
            }
            if (_AT) {
              const user = await sql.find(
                `select count(*) as status, id from user where password_hashed = '${_AT}'`
              )

              if (user.status) {
                req = Object.assign(req, { user })

                await handler(req, res)
              } else {
                throw new Error('cookie is not found')
              }
            }
          } catch (e) {
            console.log('get token error', e)
            res.json({ isNoToken: true, mes: 'cookie is not found' })
          }
        })
      )
    })
  })
}

export default routers
