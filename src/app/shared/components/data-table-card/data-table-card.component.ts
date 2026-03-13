import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-data-table-card',
  templateUrl: './data-table-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCardComponent {
  displayedColumns = ['name', 'content', 'status', 'lastUpdated'];
  dataSource: any[] = [
    { name: 'Item 1', content: 'Description 1', status: 'Active', lastUpdated: '2023-01-01' },
    { name: 'Item 2', content: 'Description 2', status: 'Inactive', lastUpdated: '2023-01-02' },
    { name: 'Item 3', content: 'Description 3', status: 'Active', lastUpdated: '2023-01-03' }
  ]; // Sample data
}
