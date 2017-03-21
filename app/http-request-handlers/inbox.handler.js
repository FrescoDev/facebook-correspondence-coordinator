import BaseHandler from 'fresco-http-service-utilities'
import Worker from '../../facebook-correspondence-coordinator'

class InboxHandler extends BaseHandler {
  index (req, res) {
    let worker = new Worker()
    let response = worker.work(req)
    res.json({
      'res': response
    })
  }
}

export default new InboxHandler()
