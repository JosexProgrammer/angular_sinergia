import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public opcion = 1
  faBars = faBars;
  faTowerBroadcast = faTowerBroadcast
  constructor() { }

  ngOnInit(): void {
  }

}
