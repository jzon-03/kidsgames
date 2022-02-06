import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogmessage',
  templateUrl: './dialogmessage.component.html',
  styleUrls: ['./dialogmessage.component.css']
})
export class DialogmessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
