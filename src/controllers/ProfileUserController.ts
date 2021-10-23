import { Request, Response } from 'express';
import { UserProfile } from '../services/UserProfile';

class ProfileUserController {

  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const service = new UserProfile();
    const result = await service.execute(user_id);
    return res.json(result);
  }

}

export { ProfileUserController }