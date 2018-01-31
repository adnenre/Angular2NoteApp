import { Component,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
@Output() taskDeleted = new EventEmitter<object>();
@Input() task:{id:number,name:string,time:string,category:string};

  setClass(){
  	let class_name = this.task.category.toLowerCase()+'_task';
    return class_name;
  }
  onTaskDeleted(){
  	this.taskDeleted.emit(this.task);
  }
}
