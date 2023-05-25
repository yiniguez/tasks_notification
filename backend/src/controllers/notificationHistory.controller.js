import NotificationHistory from "../models/NotificationHistory.js";

export const createNotificationHistory = async (req, res) => {
  try {
    const { notificationId, notificationMsg, categoryId, categoryName,
      status, channelId, channelName, channelAlias, userId, userName, userEmail, userPhoneNumber } = req.body;

    // creating a new NotificationHistory
    const notificationHistory = await new NotificationHistory({
      notificationId: notificationId,
      notificationMsg: notificationMsg,
      categoryId: categoryId,
      categoryName: categoryName,
      status: status,
      channelId: channelId,
      channelName: channelName,
      channelAlias: channelAlias,
      userId: userId,
      userName: userName,
      userEmail: userEmail,
      userPhoneNumber: userPhoneNumber,
    }).save();

    return res.status(200).json({
      _id: notificationHistory._id,
      notificationId: notificationHistory.notificationId,
      notificationMsg: notificationHistory.notificationMsg,
      categoryId: notificationHistory.categoryId,
      categoryName: notificationHistory.categoryName,
      status: notificationHistory.status,
      channelId: notificationHistory.channelId,
      channelName: notificationHistory.channelName,
      channelAlias: notificationHistory.channelAlias,
      userId: notificationHistory.userId,
      userName: notificationHistory.userName,
      userEmail: notificationHistory.userEmail,
      userPhoneNumber: notificationHistory.userPhoneNumber,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getNotificationHistory = async (req, res) => {
  const logs = await NotificationHistory.find();
  return res.json(logs);
};
