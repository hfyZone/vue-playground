const app = Vue.createApp({
    data() {
        return {
            todoList:["吃饭","睡觉"],
            newTodo:""
        }
    },
    methods:{
        insertTodo(){
           this.todoList.unshift(this.newTodo);
        },
        removeTodo(index){
            this.todoList.splice(index,1);
        }
    }
});
app.mount('#app');