import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavigationToggle = new EventEmitter ();
  constructor() { }

  ngOnInit() {
  }
  onToggleOpenSidenav() {
    this.sidenavigationToggle.emit();
  }
}
