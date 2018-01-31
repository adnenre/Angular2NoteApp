import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tasks_elements:Array<object>=[{id:1,name:'visit doctor',time:'09:00',date:'2010-10-02',category:'Health'}];
  tasks_length:string;


/* Add task */

addTask(taskData:{id:number,task_name:string,task_time:string,task_date:string,task_category:string}){
	this.tasks_elements.push({
     id:this.tasks_elements.length+1,
     name:taskData.task_name,
     time:taskData.task_time,
     date:taskData.task_date,
     category:taskData.task_category
	})
this.show_tasks_length();
}
/* Delete task */

deleteTask(note){
  let array = this.tasks_elements;
  array=array.filter(function(element){
    return element !== note;
  });
   this.tasks_elements= array;
}



show_tasks_length(){
  let l:number = this.tasks_elements.length;
 
  if (l>1)
  {
     this.tasks_length= l +' Notes';
  }else{
    this.tasks_length = l +' Note';
  }
  return this.tasks_length;
}



}
