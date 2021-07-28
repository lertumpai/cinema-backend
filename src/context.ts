import { verifyToken } from './domains/auth/utils/token'

export function context({ req, res }) {
  req.user = verifyToken(req)

  return {
    req,
    res,
  }
}