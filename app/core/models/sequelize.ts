import config from './config'
const Sequelize = require('sequelize')

class DataBase extends Sequelize {
    constructor(...args) {
        super(...args)
    }

    async find(sql) {
        // console.log('sql query',sql)
        try {
            let result = await this.query(sql)
            return result[0][0]
        } catch (e) {
            console.log('sequulzie find fail', e)
            return false
        }
    }
}

function createDatabase(config) {
    return new DataBase(config.database, config.user, config.password, config)
}

function connection(config) {
    let db = createDatabase(config)
    return db
}
export default connection(config)
