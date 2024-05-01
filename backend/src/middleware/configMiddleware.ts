import { Request, Response, NextFunction } from 'express'
// import express from 'express'

export const configMiddleware = (_req: Request, _res: Response, next: NextFunction) => {
  // express.urlencoded({
  //   extended: true,
  //   limit: '35mb',
  //   parameterLimit: 50000,
  // })

  // express.json({ limit: '35mb' })
  // express.static('public')
  // cors(CORS_CONFIG)
  // rateLimit(RATE_LIMIT_CONFIG)

  next()
}
