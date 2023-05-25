import LogsService from "./LogsService.js";

class SmsChannelService extends LogsService {
    constructor(data) {
        super(data)
        this.channelName = "sms"
    }

    sendNotification () {
        let status = 'SUCCESS';
        //TODO: Make the Logic to send Notification and update status.
        this.status = status;

        return this.status;
    }
}

export default SmsChannelService;