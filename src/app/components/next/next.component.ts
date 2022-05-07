import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  comments!: string[]
  comments2!: string[]

  constructor() { }

  ngOnInit(){
    this.comments = []
  }

  addCom (comment: string){
    this.comments.unshift(comment)
    return false
  }
}
