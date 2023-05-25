import LogsService from "./LogsService.js";

class PushNotificationChannelService extends LogsService {
    constructor(data) {
        super(data)
        this.channelName = "push_notification"
    }

    sendNotification () {
        let status = 'SUCCESS';
        //TODO: Make the Logic to send Notification and update status.
        this.status = status;

        return this.status;
    }
}

export default PushNotificationChannelService;