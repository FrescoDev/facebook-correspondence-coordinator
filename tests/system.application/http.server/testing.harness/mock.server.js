import * as chai from 'chai'

import chaiHttp from 'chai-http'
import server from '../../../../src/niobi/system.application/http.server'

chai.use(chaiHttp)
export default chai.request(server)