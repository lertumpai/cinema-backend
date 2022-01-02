import { ValueObject } from '../../value-object.share'
import * as bcrypt from 'bcrypt'

interface PasswordProps {
  value: string
}

export class Password extends ValueObject<PasswordProps> {

  get value (): string {
    return this.props.value;
  }

  public hash(): string {
    return bcrypt.hashSync(this.props.value, 10)
  }

  private constructor (props: PasswordProps) {
    super(props);
  }

  public static create (password: string) : Password {
    if (password === undefined || password === null || password.length <= 2 || password.length > 30) {
      throw new Error('User must be greater than 2 chars and less than 100.')
    } else {
      return new Password({ value: password })
    }
  }
}