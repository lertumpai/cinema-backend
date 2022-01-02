import { ValueObject } from '../../value-object.share'

interface UsernameProps {
  value: string
}

export class Username extends ValueObject<UsernameProps> {

  get value (): string {
    return this.props.value;
  }

  private constructor (props: UsernameProps) {
    super(props);
  }

  public static create (username: string) : Username {
    if (username === undefined || username === null || username.length <= 2 || username.length > 30) {
      throw new Error('User must be greater than 2 chars and less than 100.')
    } else {
      return new Username({ value: username })
    }
  }
}