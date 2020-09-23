import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuSelected = new EventEmitter<string>();
  collapsed = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(menu: string) {
    this.menuSelected.emit(menu);
  }

}
