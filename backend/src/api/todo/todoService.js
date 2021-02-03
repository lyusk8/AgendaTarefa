const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ new: true, renValidators: true });

module.exports = Todo;
