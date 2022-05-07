import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

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
