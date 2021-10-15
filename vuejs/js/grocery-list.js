Vue.component("grocery-list",{
    props:["todo"], //props = properties
    template:"<li>{{todo.desc}}</li>"
})