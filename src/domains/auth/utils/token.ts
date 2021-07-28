import * as jwt from 'jsonwebtoken'

export function verifyToken(req) {
  const { token } = req.cookies

  if (!token) {
    return null
  }

  try {
    return jwt.verify(token, 'secret')
  } catch (e) {
    return null
  }
}