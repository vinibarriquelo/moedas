import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selected = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {

  }

  public getPairsSelected(pairs: string[]) {
    this.selected.emit(pairs);
  }

}
