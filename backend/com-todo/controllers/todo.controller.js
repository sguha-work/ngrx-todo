import CommonController from './common.controller.js';
import TodoService from '../services/todo.service.js';
import {GetProductValidatorSchema} from '../schemas/validator.schema.js';
const commonController = CommonController.CommonControllerInstance;

class TodoController {
  static async get(request, response) {
    return await commonController.handleRequest(request, TodoService.get, response, GetProductValidatorSchema);
  };
  static async delete(request, response) {
    return await commonController.handleRequest(request, TodoService.delete, response);
  };
}
export default TodoController;
