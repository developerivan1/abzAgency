import { Component, OnInit } from '@angular/core';
import { HeaderConstants } from '../../constants/header.constant';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Arrays of navigation links
  links = HeaderConstants.navigation_links;
  mobileLinks = HeaderConstants.mobile_navigation_links;
  // Property for toggling sidebar
  isSidebarOpened = false;

  constructor() { }

  ngOnInit(): void {}

  /**
   * Toogle sidebar
   */
  public toggleSidebar(): void {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

}
