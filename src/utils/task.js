class Task {
  constructor(name, description, priority, category) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.category = category;
    this.taskId = crypto.randomUUID();
  }
}

export default Task;
