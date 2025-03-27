import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideFadeDown', [
      transition(':enter', [
        style({ transform: 'translateY(-50px)', opacity: 0 }), // يبدأ من الأعلى وغير مرئي
        animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // يتحرك للأسفل ويصبح مرئيًا
      ])
    ]),
    trigger('slideFadeUp', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }), // يبدأ من الأعلى وغير مرئي
        animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // يتحرك للأسفل ويصبح مرئيًا
      ])
    ])
  ]
})
export class HomeComponent {}