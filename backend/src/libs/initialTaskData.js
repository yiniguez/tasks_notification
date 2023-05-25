import Task from "../models/Task.js";

export const createTasks = async () => {
  try {
    const count = await Task.estimatedDocumentCount();

    if (count > 0) return;
    // Create default taks
    const values = await Promise.all([
      new Task({ title: "Task1" , description: "Do task 1 description" , completed: false }).save(),
      new Task({ title: "Task2" , description: "Do task 2 description" , completed: true  }).save(),
      new Task({ title: "Task3" , description: "Do task 3 description" , completed: true  }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

createTasks();