function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  }
  return task
}

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`)
}

function completeTask(task) {
  task.complete = true;
}

// DRIVER

const task1 = newTask('clean cat litter', 'take poop out of litter box')
const task2 = newTask('do laundry', 'poop')
const tasks = [task1, task2]

logTaskState(task1)
completeTask(task1)
logTaskState(task1)

console.log(tasks);