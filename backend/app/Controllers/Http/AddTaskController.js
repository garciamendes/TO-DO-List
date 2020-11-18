'use strict'

// Local import
const AddTask = use('App/Models/AddTask')

class AddTaskController {
  async AddTask({ request }) {
    const data = request.only(['task'])

    const task = await AddTask.create(data)

    return task
  }

  async ListTasks() {
    const tasks = await AddTask.all()

    const listJson = tasks.toJSON()

    return listJson
  }
}

module.exports = AddTaskController
