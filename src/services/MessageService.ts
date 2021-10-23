import prismaClient from '../prisma';
import { io } from '../app';

class MessageService {

  async create(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      }
    });
    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      creted_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      }
    }

    io.emit('new_message', infoWS);
    return message
  }

  async getLast3() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      include: {
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return messages;
  }

}

export { MessageService }