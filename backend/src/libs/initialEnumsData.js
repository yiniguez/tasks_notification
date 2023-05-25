import Category from "../models/Category.js";
import Channel from "../models/Channel.js";

export const createCategories = async () => {
  try {
    // Count Documents
    const count = await Category.estimatedDocumentCount();

    if (count > 0) return;

    // Create default Categories
    const values = await Promise.all([
      new Category({ name: "Sports" }).save(),
      new Category({ name: "Finance" }).save(),
      new Category({ name: "Movies" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createChannels = async () => {
  try {
    // Count Documents
    const count = await Channel.estimatedDocumentCount();

    if (count > 0) return;

    // Create default Channels 
    const values = await Promise.all([
      new Channel({ name: "sms" , alias: "SMS" }).save(),
      new Channel({ name: "e-mail", alias: "E-Mail" }).save(),
      new Channel({ name: "push_notification", alias: "Push Notification" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

createCategories();
createChannels();