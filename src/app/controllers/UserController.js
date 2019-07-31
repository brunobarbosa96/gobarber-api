import User from '../models/User';

class UserController {
    async store(res, res) {
        const user = await User.create(req.body);
        return res.json(user);
    }
}

export default new UserController();