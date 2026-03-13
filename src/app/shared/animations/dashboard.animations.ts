import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const GlobalAnimations = [
  trigger('sidebarToggle', [
    state('collapsed', style({ width: '70px' })),
    state('expanded', style({ width: '240px' })),
    transition('collapsed <=> expanded', animate('350ms cubic-bezier(0.4, 0, 0.2, 1)'))
  ]),
  trigger('megaMenuFade', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-10px)' }),
      animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
    ])
  ])
];