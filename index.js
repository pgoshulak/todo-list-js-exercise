function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`)
    },

    completeTask: function() {
      this.complete = true;
    }
  }
  return task
}



// DRIVER

const task1 = newTask('clean cat litter', 'take poop out of litter box')
const task2 = newTask('do laundry', 'poop')
const tasks = [task1, task2]

task1.logTaskState()
task1.completeTask()
task1.logTaskState()

console.log(tasks);