import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;

  isMaximized$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  onExpand(): void {
    this.isMaximized$.next(!this.isMaximized$.value);
  }

}
