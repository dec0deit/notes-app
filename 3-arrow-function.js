const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo:function(){
        const tasktoDo=this.tasks.filter((tasks)=>{
                return tasks.completed === false
        })
        return tasktoDo
     }
}

console.log(tasks.getTasksToDo())