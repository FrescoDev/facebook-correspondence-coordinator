import BaseHandler from 'fresco-http-service-utilities'

class MetedataRequestHandler extends BaseHandler {
    get(req, res) {
        res.json({
            description: 'facebook-correspondence-coordinator',
            health: 'ok'
        })
    }
}

export default new MetedataRequestHandler()