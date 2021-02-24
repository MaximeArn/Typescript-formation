interface Task {
  title: string;
  description: string;
  color: string;
}

const createTask = (title: string, description: string, color: string): Task => {
  let newTask: Partial<Task> = {}; //ERROR
  // Type '{}' is missing the following properties from type 'Task': title, description, color

  newTask.title = title;
  newTask.description = description;
  newTask.color = color;

  return newTask as Task;
};
