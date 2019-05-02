import {animate, style, transition, trigger} from '@angular/animations';

export const animateText = trigger('animateText', [
  transition('* => *', [
    style({
      transform: 'translateY(-100px)'
    }),
    animate(1200, style({
      transform: 'translateY(0)'
    }))
  ])
]);
