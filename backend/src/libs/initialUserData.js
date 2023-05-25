import Category from "../models/Category.js";
import Channel from "../models/Channel.js";
import User from "../models/User.js";

export const createUsers = async () => {
  try {
    // Count Documents
    const count = await User.estimatedDocumentCount();

    if (count > 0) return;
    // Create default Users
    const categoryDat = await Category.find();
    const categoryData = categoryDat.map((category) => { 
      return {"id": category._id, "name": category.name }
    });
    console.log(categoryData);
    const channelDat = await Channel.find();
    const channelData = channelDat.map((channel) => { 
      return {"id": channel._id, "name": channel.name, "alias": channel.alias }
    });
    console.log(channelData);
    // create a new user
    const values = await Promise.all([
      new User({
        name: "Juan", 
        email: "juan@mail.com", 
        phoneNumber: "+111111111", 
        categories: categoryData,
        channels: channelData
      }).save(),
    ]);

    console.log(values);

  } catch (error) {
    console.error(error);
  }
};

createUsers();
  