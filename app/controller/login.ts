import { Request, Response, NextFunction } from 'express'
import { get, post } from '../core/decorator/controller'
import { encrypt } from '../utils/md5'
import sql from '../core/models/sequelize'

class Login {
    @post('/login')
    async login(req: Request, res: Response) {
        let errorcode = 0,
            token = ''
        const { username, password } = req.body

        const query = `select count(*) as status,password_hashed from user where login_name = '${username}' `
        const result = await sql.find(query)

        if (result.status == 0) {
            // *不存在的用户
            errorcode = 1
        } else {
            let hash = encrypt(password)
            if (result.password_hashed !== hash) {
                //* 密码错误
                errorcode = 2
            } else {
                token = hash
            }
        }

        res.json({ token, errorcode })
    }
}

export default Login
