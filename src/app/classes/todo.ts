export class Todo {
  id: number;
  title: string = '';
  completed: boolean = false;
  expireDate: string;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
