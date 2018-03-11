import { get, post } from '../core/decorator/controller'
import { encrypt } from '../utils/md5'
import sql from '../core/models/sequelize'
import { task } from '../core/models/my_db'

class Login {
    @get('/todolist')
    async todolist(req: Request, res: Response) {
        // let errorcode = 0,
        //     token = ''
        // const { username, password } = req.body

        // const query = `select count(*) as status,password_hashed from user where login_name = '${username}' `
        // const result = await sql.find(query)

        // if (result.status == 0) {
        //     // *不存在的用户
        //     errorcode = 1
        // } else {
        //     let hash = encrypt(password)
        //     if (result.password_hashed !== hash) {
        //         //* 密码错误
        //         errorcode = 2
        //     } else {
        //         token = hash
        //     }
        // }
        // console.log('result', result)

        res.json({ errorcode: 0 })
    }

    @get('/addtask')
    async addtask(req: Request, res: Response) {
        task(sql)
            .create({
                title: '第一次',
                status: 1,
                update_time: '123',
                detail: '不多说',
                label: '标签'
            })
            .then(m => {
                console.log('insert article succes', m)
            })
            .catch((err: Error) => {
                console.log('insert article faild', err)
            })
        res.json({ errorcode: 0 })
    }
}

export default Login
