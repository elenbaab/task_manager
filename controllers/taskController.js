const Task = require('../models/task');

const task_index = (req,res) => 
{
    Task.find().sort({createdAt: -1}).then((result) => {
        res.render('tasks/index',{title:'All Tasks',tasks:result})
    }).catch((err) => {
        console.log(err)
    })
}

const task_details = (req,res) => 
{
    const id = req.params.id;
    Task.findById(id).then((result) => {
        res.render('tasks/details',{task:result, title:'Task Details'});
    })
    .catch((err) => {
        res.status(404).render('404',{title: 'Task Not Found'})
    })
}

const task_create_get = (req,res) => 
{
    res.render('tasks/create', {title:'Create a new Task'});
}

const task_create_post = (req,res) => 
{
    const task = new Task(req.body);
    task.save().then((result) => {
        res.redirect('/tasks');
    })
    .catch((err) => {
        console.log(err);
    })
}

const task_delete = (req,res) => 
{
    const id = req.params.id;
    Task.findByIdAndDelete(id).then((result) => {
        res.json({redirect:'/tasks'});
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {task_index,task_details,task_create_get,task_create_post,task_delete}