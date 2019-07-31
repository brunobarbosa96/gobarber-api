import { Router } from "express";
import User from "./app/models/User";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.get("/", async (req, res) => {
    const user = await User.create({
        name: "Bruno Barbosa",
        email: "brunobarbosa96@hotmail.com",
        password_hash: "123"
    });

    return res.json(user);
});

export default routes;
