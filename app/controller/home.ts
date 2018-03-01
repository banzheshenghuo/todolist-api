import { get } from '../core/decorator/controller'

class Home {
    @get('/home')
    async home(req, res) {
        console.log('userId', req.user)
        res.json({ user: 'home' })
    }
}

export default Home
