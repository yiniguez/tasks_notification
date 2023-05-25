import Category from "../models/Category.js";
import Notification from "../models/Notification.js";


export const createNotifications = async () => {
  try {
    // Count Documents 
    const count = await Notification.estimatedDocumentCount();

    if (count > 0) return;

    // get category
    const categoryData = await Category.findOne({ name: "Sports" });
    console.log(categoryData);
    const categoryId = categoryData ? categoryData._id : '';
    const categoryName = categoryData ? categoryData.name : ''; 
    // Create default Notification 
    const values = await Promise.all([
      new Notification({ message: "Test notification msg", status: "PENDING", category: categoryId, categoryName: categoryName }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

createNotifications();