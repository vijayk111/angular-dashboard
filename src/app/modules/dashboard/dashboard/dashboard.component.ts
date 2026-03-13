import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: any;
  dashboard: any[] = [];

  // Mock data matching your image rows
  tableData = [
    { name: 'Josey Admin', content: 'JS Admin', status: 'ADMIN', lastUpdate: '03/03/2023' },
    { name: 'Rotish Chevmans', content: 'JS Rsvan', status: 'ADMIN', lastUpdate: '03/03/2022' },
    { name: 'Ravis on frama', content: 'JS Awan', status: 'ADMIN-RED', lastUpdate: '03/03/2022' },
    { name: 'Tianxa Patterson', content: 'JS Ravan', status: 'ACTIV', lastUpdate: '03/03/2022' }
  ];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.options = this.layoutService.gridOptions;
    this.dashboard = [
      { id: '1', cols: 6, rows: 4, y: 0, x: 0, title: 'Charts chart', type: 'chart' },
      { id: '2', cols: 6, rows: 4, y: 0, x: 6, title: 'Map Destination', type: 'map' },
      { id: '3', cols: 12, rows: 4, y: 4, x: 0, title: 'Table Contents', type: 'table' }
    ];
  }
}
