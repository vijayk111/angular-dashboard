import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  collapsed = false;

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Analytics', icon: 'analytics' },
    { label: 'Reports', icon: 'bar_chart' },
    { label: 'Settings', icon: 'settings' },
    { label: 'Help', icon: 'help_outline' }
  ];

  activeIndex = 0;

  toggle() {
    this.collapsed = !this.collapsed;
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
}
