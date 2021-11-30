import { NextFunction, Request, Response } from 'express';
import { UserInterface } from 'models/UserModel';
import { UserService } from 'services/UserService';

import { Controller } from './Controller';

export class UserController extends Controller<UserInterface> {
  constructor() {
    super(new UserService());
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const token = await (this.service as UserService).login(email, password);
      return res.json({ success: true, token });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  }
}

export const userController = new UserController();
