const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.update({new: true, runValidators: true})

module.exports = Todo