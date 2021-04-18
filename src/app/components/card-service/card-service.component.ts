import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']
})
export class CardServiceComponent implements OnInit {


  @Input() img:string='';
  @Input() msg:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
