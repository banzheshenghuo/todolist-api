import sequelize from './models/sequelize'
import * as models from './models/my_db'

export default class SqlAction {
    constructor(model: string) {
        this.model = model
    }

    async modify(parm: any) {
        if (parm.id) {
            return await models[this.model](sequelize).create(parm)
        }
    }
}
