import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { MessageController } from "./controllers/MessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages', ensureAuthenticated, new MessageController().handle);

router.get('/messages/last3', new MessageController().getLast3);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router }