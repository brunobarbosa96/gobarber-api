import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionControlller";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

export default routes;
