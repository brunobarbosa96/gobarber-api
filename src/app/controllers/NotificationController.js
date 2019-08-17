import Notification from "../schemas/Notification";
import User from "../models/User";

class NotificationController {
    async index(req, res) {
        const checkIsProvider = await User.findOne({
            where: { id: req.userId, provider: true }
        });

        if (!checkIsProvider)
            return res.status(401).json({
                error: "Only providers can load notifications"
            });

        const notifications = await Notification.find({
            user: req.userId
        })
            .sort({ createdAt: "desc" })
            .limit(20);

        res.json(notifications);
    }

    async update(req, res) {
        // const notification = await Notification.findById(req.params.id);

        const notification = await Notification.findOneAndUpdate(
            req.params.id,
            { read: true },
            { new: true } // retorna o registro já atualizado
        );

        return res.json(notification);
    }
}

export default new NotificationController();
