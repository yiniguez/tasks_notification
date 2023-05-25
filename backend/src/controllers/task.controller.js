import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();

  return res.json(tasks);
};

export const getTaskById = async (req, res) => {
  let { taskId } = req.params;

  const task = await Task.findById(taskId);

  return res.status(200).json(task);
};

export const createTasks = async (req, res) => {
 try {
    const { title, description, completed } = req.body;

    if (title && description) {

      // creating a new Task
      const task = await new Task({
        title: title,
        description: description,
        completed: completed ? true : false,
      }).save().then(
        (task) => {
          return res.status(201).json({
            success: true,
            data: {
              title: title, description: description
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
              title: title, description: description
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
          title: title, description: description
        },
        error: {
          code: 400, 
          msg: 'Missing or invalid parameters'
        },
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      data: {
        title: title, description: description
      },
      error: {
        code: 400, 
        msg: 'Missing or invalid parameters'
      },
    });
  }
};
export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.taskId,
    req.body,
    {
      new: true,
    }
  );

  return res.status(204).json(updatedTask);
};
export const deleteTaskById = async (req, res) => {
  const { taskId } = req.params;
  
  await Task.findByIdAndDelete(taskId);

  return res.status(204).json({ success: 'ok' });
};
