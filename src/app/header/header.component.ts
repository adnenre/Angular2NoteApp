import { Component,EventEmitter,Output } from '@angular/core';
import { TasksComponent }  from  '../tasks/tasks.component';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls : ['./header.component.css']
})

export class HeaderComponent{
	@Output() taskCreated = new EventEmitter<{id:number,
		                                      task_name:string,
		                                      task_time:string,
		                                      task_date:string,
		                                      task_category:string
		                                      }>();
    input_state:boolean = true;
	isChecked = true;

	newId:number;
	newNote:string = '';
	newTime:string = '10:00';
	newDate:string = '2018/10/10';
	newCategorie:string = "Health";

	onAddTask(){
        if( this.newNote == ''  )
		{
			this.input_state=false;
			this.setClass();
		}
		else{
	        this.taskCreated.emit(
			{id :1,
			 task_name:this.newNote, 
			 task_date:this.newDate,
			 task_time:this.newTime,
			 task_category:this.newCategorie
			})
	    }
  }
  
  	setClass(){
  		if(this.input_state==true || this.newNote != ''){
  			return 'form_success';
  		}else{
  			return 'form_warning';
  		}
  		
  	}



}