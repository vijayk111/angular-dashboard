import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridsterConfig, GridType, DisplayGrid, CompactType } from 'angular-gridster2';

export const GRID_OPTIONS: GridsterConfig = {
  // Grid Type & Dimensions
  gridType: GridType.Fit,            // Ensures the grid fits exactly within the viewport height
  displayGrid: DisplayGrid.None,      // Hides the dotted grid lines for a cleaner look
  compactType: CompactType.None,     // Items stay exactly where you put them
  
  // Sizing
  minCols: 12,                       // Standard 12-column bootstrap-style grid
  maxCols: 12,
  minRows: 12,                       // Sufficient rows for deep dashboards
  maxRows: 12,
  margin: 16,                        // Spacing between widgets
  outerMargin: true,                 // Padding around the entire dashboard
  outerMarginTop: 10,
  
  // Interaction
  draggable: {
    enabled: true,
    ignoreContent: true,             // Only drag by the header, not the table/chart
    dragHandleClass: 'widget-header',
  },
  resizable: {
    enabled: true,
  },
  
  // Performance & UX
  pushItems: true,                   // Move other widgets out of the way
  disableScrollHorizontal: true,
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: false,
};

@Injectable({ providedIn: 'root' })
export class LayoutService {

  // Tracks which item is currently expanded
  private expandedItemSource = new BehaviorSubject<string | null>(null);
  expandedItem$ = this.expandedItemSource.asObservable();

  // Shared Gridster Options
  public gridOptions: GridsterConfig = {
    draggable: { enabled: true },
    resizable: { enabled: true },
    displayGrid: 'onDrag&Resize',
    pushItems: true,
    margin: 15,
    outerMargin: true,
    minCols: 12,
    maxCols: 12,
  };

  toggleExpand(itemId: string) {
    const current = this.expandedItemSource.value;
    const nextValue = current === itemId ? null : itemId;
    
    // Disable grid interactions when an item is maximized to prevent background scrolling
    this.gridOptions.draggable.enabled = nextValue === null;
    this.gridOptions.resizable.enabled = nextValue === null;
    
    this.expandedItemSource.next(nextValue);
    
    // Force browser to recalculate layouts for Charts/Maps
    setTimeout(() => window.dispatchEvent(new Event('resize')), 400);
  }
}
