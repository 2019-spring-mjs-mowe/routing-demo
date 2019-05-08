import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  get CatName() {
    return this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
  }

}
