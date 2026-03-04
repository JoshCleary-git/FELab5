import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App implements OnInit {
  students:any[]=[];
  weather:any[]=[];
  constructor(private dataService:DataService){  }

  ngOnInit(): void {
    this.dataService.GetStudentData().subscribe(
      (data)=>{
        this.students=data.students;
        console.log(this.students);
      }
    ); 
    
   this.dataService.GetWeatherData().subscribe(
      (data)=>{
        this.weather=data.weather;
        console.log(this.weather);
      }
   );  
    
  }
}
