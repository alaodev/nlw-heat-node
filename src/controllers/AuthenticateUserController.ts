import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { code } = req.body;
    const service = new AuthenticateUserService();

    try {
      return res.json(await service.execute(code));
    } catch (e) {
      console.error(e);
      return res.json({ error: e.message });
    }

  }

}

export { AuthenticateUserController }