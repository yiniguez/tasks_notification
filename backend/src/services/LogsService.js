import NotificationHistory from "../models/NotificationHistory.js";


class LogsService {
    notificationId = '';
    notificationMsg = '';
    categoryId = '';
    categoryName = '';
    status = 'COMPLETED';
    channelId = '';
    channelName = '';
    channelAlias = '';
    userId = '';
    userName = '';
    userEmail = '';
    userPhoneNumber = '';

    constructor(data) {
        this.notificationId = data.notificationId;
        this.notificationMsg = data.notificationMsg;
        this.categoryId = data.categoryId;
        this.categoryName = data.categoryName;
        this.status = data.status;
        this.channelId = data.channelId;
        this.channelName = data.channelName;
        this.channelAlias = data.channelAlias;
        this.userId = data.userId;
        this.userName = data.userName;
        this.userEmail = data.userEmail;
        this.userPhoneNumber = data.userPhoneNumber;
    };

    getData () {
        return {
            'notificationId': this.notificationId,
            'notificationMsg': this.notificationMsg,
            'categoryId': this.categoryId,
            'categoryName': this.categoryName,
            'status': this.status,
            'channelId': this.channelId,
            'channelName': this.channelName,
            'channelAlias': this.channelAlias,
            'userId': this.userId,
            'userName': this.userName,
            'userEmail': this.userEmail,
            'userPhoneNumber': this.userPhoneNumber,
        }
    };

    register () {
        //TODO: Logic to Register Notification History Log.
        console.log('Register notification history log'); 
        let nthl = new NotificationHistory(this.getData()).save();
    };
    

    sendNotification () {
        let status = 'SUCCESS';
        //TODO: Make the Logic to send Notification and update status.
        this.status = status;

        return this.status;
    }
}

export default LogsService;