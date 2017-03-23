import MetaHandler from '../http-request-handlers/meta.handler'
import correspondent from '../../service'
import { Router } from 'express'

const routes = new Router()

routes.use('/inbox', correspondent.router())
routes.get('/meta', MetaHandler.index)

export default routes
