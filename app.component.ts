import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userModel=new User('Rob','rob@test.com',2345678901,'angular',true);

  onSubmit(){
console.log(this.userModel);
}
}
