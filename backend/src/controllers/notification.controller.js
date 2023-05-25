import Notification from "../models/Notification.js";
import Category from "../models/Category.js";
import NotificationHistoryFactory from "../services/NotificationHistoryFactory.js";


export const createNotification = async (req, res) => {
  try {
    const { message, category } = req.body;

    const categoryFound = await Category.findOne({ _id: category });
    if (categoryFound && message) {

      // creating a new Notification
      const notification = await new Notification({
        message: message,
        status: 'PENDING',
        category: categoryFound._id,
        categoryName: categoryFound.name ? categoryFound.name : ''
      }).save().then(
        (notification) => {

          let nhFactory = new NotificationHistoryFactory(notification);
          nhFactory.createNotificationHistory();

          return res.status(201).json({
            success: true,
            data: {
              message: message, category: category
            },
            notification: {
              _id: notification._id,
              message: notification.message,
              category: notification.category,
            },
            message: 'Notification created!'
          });
        }
      ).catch(
        (error) => {
          console.error(error);
          return res.status(400).json({
            success: false,
            data: {
              message: message, category: category
            },
            error: {
              code: 400,
              msg: 'Missing or invalid parameters',
            },
          });
        }
      );
    } else {
      return res.status(400).json({
        success: false,
        data: {
          message: message, category: category
        },
        error: {
          code: 400, 
          msg: 'Missing or invalid parameters'
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getNotifications = async (req, res) => {
  const notifications = await Notification.find();

  return res.json(notifications);
};
