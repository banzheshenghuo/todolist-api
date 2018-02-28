import { get } from '../core/decorator/controller'

class Home {
    @get('/home')
    async home(req, res) {
        res.json({ data: { user: 'home' } })
    }
}

export default Home
