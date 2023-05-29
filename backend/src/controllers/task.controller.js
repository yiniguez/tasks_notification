import Task from "../models/Task.js";
import taskSchemaValidator from "../validator/taskSchemaValidator.js"

export const getTasks = async (req, res) => {
  const tasks = await Task.find();

  return res.status(200).json(tasks);
};

export const getTaskById = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) 
      return res.status(404).send('Task not found');

    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: {
        code: 400, 
        msg: 'Missing or invalid parameters'
      },
    });
  }
};

export const createTasks = async (req, res) => {
 try {
    const { error } = taskSchemaValidator.validate(req.body);
    if (error) 
      return res.status(400).send(error.details[0].message);
    
    const { title, description, completed } = req.body;

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
            title: title, description: description, completed: completed ? true : false
          },
          message: 'Task created!'
        });          
      }
    ).catch(
      (error) => {
        console.error(error);
        return res.status(400).json({
          success: false,
          data: {
            title: title, description: description, completed: completed ? true : false
          },
          error: {
            code: 400,
            msg: 'Missing or invalid parameters',
          },
        });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: {
        code: 400, 
        msg: 'Missing or invalid parameters'
      },
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) 
      return res.status(404).send('Task not found');

    const { error } = taskSchemaValidator.validate(req.body);
    if (error) 
      return res.status(400).send(error.details[0].message);

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: {
        code: 400, 
        msg: 'Missing or invalid parameters'
      },
    });
  }
};
export const deleteTaskById = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) 
      return res.status(404).send('Task not found');
    
    await Task.findByIdAndDelete(taskId);

    return res.status(200).json({ success: 'ok', msg: 'The task was deleted' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: {
        code: 400, 
        msg: 'Missing or invalid parameters'
      },
    });
  }
};
