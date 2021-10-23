import { Request, Response } from 'express';
import { MessageService } from '../services/MessageService';

class MessageController {

  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;

    try {
      const service = new MessageService();
      const result = await service.create(message, user_id);
      return res.json(result);
    } catch (e) {
      console.error(e)
      return res.json({ error: e.message, });
    }

  }

  async getLast3(req: Request, res: Response) {
    const service = new MessageService();

    try {
      const result = await service.getLast3();
      return res.json(result);
    } catch (e) {
      console.error(e)
      return res.json({ error: e.message, });
    }

  }

}

export { MessageController }