import MetedataRequestHandler from './resources/metadata/get.request.handler'
import { Router } from 'express'
import correspondent from '../core/facebook.correspondence'

const routes = new Router()

routes.use('/inbox', correspondent.router())
routes.get('/meta', MetedataRequestHandler.get)

export default routes