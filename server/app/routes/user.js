const Router = require('koa-router')
const { find, findById, create, update, delete: del, login, info, logout } = require('../controllers/user')
const auth = require('../middlewares/auth')

const router = new Router({
  prefix: '/user'
})

router.get('/', find)
router.get('/info', info)
router.get('/:id', findById)
router.patch('/:id', update)
router.delete('/:id', del)
router.post('/', create)
router.post('/login', login)
router.post('/logout', logout)


module.exports = router