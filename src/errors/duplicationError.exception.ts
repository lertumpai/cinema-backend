import { HttpException } from '@nestjs/common'

export class DuplicationErrorException extends HttpException {
  constructor(name: string, value: string) {
    super(`${name} ${value} is duplicated`, 400);
  }
}