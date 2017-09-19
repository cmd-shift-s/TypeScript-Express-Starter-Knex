import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as Validator from 'validatorjs'
import { Err } from './interfaces'

export const wrap = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next)

export function error(status: number, message: string, data?: any): Error {
  let err = new Error(message) as Err
  err.status = status
  err.data = data
  return err
}

export function validate(data: any, rules: any, next: NextFunction, customErrorMessages?: Validator.ErrorMessages) {
  const validator = new Validator(data, rules, customErrorMessages)

  if (validator.fails()) {
    return next(error(400, 'Bad Request', validator.errors.all()))
  }

  next()
}

export function validateBody(rules: any, customErrorMessages?: Validator.ErrorMessages): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    validate(req.body, rules, next, customErrorMessages)
  }
}

export function validateQuery(rules: any, customErrorMessages?: Validator.ErrorMessages): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    validate(req.query, rules, next, customErrorMessages)
  }
}
