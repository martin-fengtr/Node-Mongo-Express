import { User, UserInterface } from 'models/UserModel';

import { Service } from './Service';

export class UserService extends Service<UserInterface> {
  constructor() {
    super(User);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.model.findOne({ email });
    const isMatch = await (this.model as any).comparePassword(password);
    if (isMatch) {
      return user.token;
    }
    throw new Error('Invalid credential');
  }
}
