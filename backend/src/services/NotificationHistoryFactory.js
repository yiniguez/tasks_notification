import User from "../models/User.js";
import SmsChannelService from "../services/SmsChannelService.js";
import EmailChannelService from "../services/EmailChannelService.js";
import PushNotificationChannelService from "../services/PushNotificationChannelService.js";

let instance = null

class NotificationHistoryFactory {
    notification = null
    constructor(notification) {
        this.notification = notification
    }

    setNotification(notification) {
        this.notification = notification
    }

    async createNotificationHistory() {
        let dataForRegister = await this.getUserChannelDataForRegister(this.notification);
        for (let i = 0; i < dataForRegister.length; i++) {
            let dataToRegister = dataForRegister[i];
            let logService = this.getLogServiceInstance(dataToRegister);
            logService.sendNotification();
            logService.register();  
        }              
    }

    getLogServiceInstance(data) {
        if(data.channelName == 'sms') {
            return new SmsChannelService(data);
        } 
        else if(data.channelName == 'e-mail') { 
            return new EmailChannelService(data);
        }
        else if(data.channelName == 'push_notification') {
            return new PushNotificationChannelService(data);
        }
        else 
            return new SmsChannelService(data);
    }

    async getUserChannelDataForRegister(notification) {
        notification.status = 'SUCCESS';
        notification.save();
        let users = await User.find({"categories.id": notification.category});
        let data = [];
        for (let i = 0; i < users.length; i++) {
            let channels = users[i].channels.map((channel) => { 
                return {"id": channel.id, "name": channel.name, "alias": channel.alias }
            });
            for (let j = 0; j < channels.length; j++) {
                data.push({
                    notificationId: notification._id.toString(),
                    notificationMsg: notification.message,
                    categoryId: notification.category,
                    categoryName: notification.categoryName,
                    status: notification.status,
                    channelId: channels[j].id,
                    channelName: channels[j].name,
                    channelAlias: channels[j].alias,
                    userId: users[i]._id.toString(),
                    userName: users[i].name,
                    userEmail: users[i].email,
                    userPhoneNumber: users[i].phoneNumber,
                });
            }
        }

        return data;
    };

    static getInstance() {
        if(!instance) {
            instance = new NotificationHistoryFactory()
        }

        return instance
    }
}

export default NotificationHistoryFactory;