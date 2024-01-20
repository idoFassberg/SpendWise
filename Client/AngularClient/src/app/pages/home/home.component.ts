import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  months: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

     this.months = this.dataService.getMonths();


  }
}
