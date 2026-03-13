import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements OnInit, AfterViewInit {
  @ViewChild('waveChart') chartCanvas: ElementRef;
  chart: any;

  ngOnInit() {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    // Create the AT&T Blue Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 168, 224, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 168, 224, 0)');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Activity',
          data: [300, 600, 400, 750, 450, 900, 800],
          borderColor: '#00A8E0', // AT&T Blue
          borderWidth: 3,
          backgroundColor: gradient,
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#00A8E0',
          pointRadius: 4
          // tension: 0.4 // Creates the smooth wave - removed due to type issue
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
          yAxes: [{
            ticks: { beginAtZero: true, max: 1500, stepSize: 300, fontColor: '#aaa' },
            gridLines: { color: 'rgba(0,0,0,0.03)' }
          }],
          xAxes: [{
            gridLines: { display: false },
            ticks: { fontColor: '#aaa' }
          }]
        }
      }
    });
  }
}
