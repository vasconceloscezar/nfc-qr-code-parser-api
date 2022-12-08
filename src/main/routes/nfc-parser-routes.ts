import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeNfcParseController } from '../factories/make-nfc-parse-controller'

export default (router: Router): void => {
  router.post('/parse_nfc', adaptRoute(makeNfcParseController()))
}
