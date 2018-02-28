import express from 'express'
import _ from 'lodash'
import * as controllers from '../controller'

const router = express.Router()

function routers(app) {
    _.forOwn(controllers, (controller: any, key) => {
        const { routes: modules } = new controller()

        _.forOwn(modules, module => {
            const path = module.path
            const method = module.method
            const handler = module.handler

            app.use(
                '/',
                router[method](path, async function(req, res) {
                    await handler(req, res)
                })
            )
        })
    })
}

export default routers
