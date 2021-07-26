import { HttpException } from '@nestjs/common'

export class NotFoundErrorException extends HttpException {
  constructor(name: string, value: string) {
    super(`${name} ${value} is not found`, 400);
  }
}

export class DuplicationErrorException extends HttpException {
  constructor(name: string, value: string) {
    super(`${name} ${value} is duplicated`, 400);
  }
}