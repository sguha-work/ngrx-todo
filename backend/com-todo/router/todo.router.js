import TodoController from "../controllers/todo.controller.js"
const TodoRouter = {
    'post': {
        
    },
    'get': {
        '/todo/get': (request, response)=>TodoController.get(request, response),
    },
    'delete': {
        '/todo/delete/:id': (request, response)=>TodoController.delete(request, response),
    }
    
}
export default TodoRouter;