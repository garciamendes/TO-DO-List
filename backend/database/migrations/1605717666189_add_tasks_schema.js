'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddTasksSchema extends Schema {
  up () {
    this.create('add_tasks', (table) => {
      table.increments()
      table.string('task', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('add_tasks')
  }
}

module.exports = AddTasksSchema
