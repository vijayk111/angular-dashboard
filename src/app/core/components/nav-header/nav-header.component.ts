import { Component, OnInit } from '@angular/core';
import { GlobalAnimations } from '../../../shared/animations/dashboard.animations';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  animations: GlobalAnimations
})
export class NavHeaderComponent implements OnInit {
  activeMenuIndex = 0;
  hoveredMenuIndex: number | null = null;
  openMegaMenuIndex: number | null = null;

  private keepMegaMenuOpen = false;

  defaultSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Dashboard Overview', icon: 'dashboard' },
        { name: 'User Activity', icon: 'history' },
        { name: 'Reports', icon: 'insert_chart' },
        { name: 'Support', icon: 'support' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'API Docs', icon: 'code' },
        { name: 'Developer Portal', icon: 'developer_board' },
        { name: 'Integrations', icon: 'link' }
      ]
    },
    {
      title: 'Settings',
      links: [
        { name: 'Profile', icon: 'person' },
        { name: 'Notifications', icon: 'notifications' },
        { name: 'Security', icon: 'security' }
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'Documentation', icon: 'description' },
        { name: 'Community', icon: 'group' },
        { name: 'Contact Support', icon: 'support' }
      ]
    }
  ];

  constructor() { }

  menus: any[] = [
    { title: 'Home', isNew: false },
    { title: 'Modules', isNew: false },
    { title: 'Admin Tools', isNew: true },
    { title: 'Global Services', isNew: false },
    { title: 'Reports & Analytics', isNew: false },
    { title: 'Team Management', isNew: false },
    { title: 'Configs & Settings', isNew: false },
    { title: 'Billing', isNew: true },
    { title: 'Security', isNew: true },
    { title: 'API & Integrations', isNew: false },
    { title: 'Support', isNew: false },
    { title: 'System Health', isNew: true },
    { title: 'Logs', isNew: true },
    {
      title: 'Auditing',
      isNew: true,
      sections: [
        {
          title: 'Security Audits',
          links: [
            { name: 'User Activity Logs', icon: 'history' },
            { name: 'Permission Changes', icon: 'lock' },
            { name: 'Fort time Logs', icon: 'security' },
            { name: 'User Arms Logs', icon: 'shield' }
          ]
        },
        {
          title: 'System Audits',
          links: [
            { name: 'Performance Logs', icon: 'speed' },
            { name: 'Error Logs', icon: 'report_problem' }
          ]
        },
        {
          title: 'Compliance Audits',
          links: [
            { name: 'System Settings', icon: 'settings' },
            { name: 'Data Time Logs', icon: 'schedule' },
            { name: 'Regulatory Reports', icon: 'description' }
          ]
        },
        {
          title: 'Network Audits',
          links: [
            { name: 'Traffic Analysis', icon: 'show_chart' },
            { name: 'Firewall Changes', icon: 'security' },
            { name: 'API Key Usage', icon: 'vpn_key' }
          ]
        }
      ]
    }
  ];

  setActive(index: number) {
    this.activeMenuIndex = index;
  }

  ngOnInit(): void {
    // Ensure every menu has sections so the mega menu is always available
    this.menus = this.menus.map(menu => ({
      ...menu,
      sections: menu.sections || this.defaultSections
    }));
  }

  onNavItemClick(index: number) {
    if (!this.menus[index].sections) {
      this.openMegaMenuIndex = null;
      return;
    }

    if (this.openMegaMenuIndex === index) {
      this.openMegaMenuIndex = null;
      this.keepMegaMenuOpen = false;
    } else {
      this.openMegaMenuIndex = index;
      this.keepMegaMenuOpen = true;
    }
  }

  onNavItemHover(index: number) {
    if (!this.keepMegaMenuOpen) {
      return;
    }

    if (this.openMegaMenuIndex !== index) {
      this.openMegaMenuIndex = index;
    }
  }

  closeMegaMenu() {
    this.openMegaMenuIndex = null;
    this.keepMegaMenuOpen = false;
  }

  isRightAligned(index: number): boolean {
    // Align the mega-menu to the right when near the end of the menu items
    const endThreshold = this.menus.length - 4;
    return index >= endThreshold;
  }

}
