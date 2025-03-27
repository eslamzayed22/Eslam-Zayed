import { trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
      trigger('slideFadeLeft', [
        transition(':enter', [
          style({ transform: 'translatex(-150px)', opacity: 0 }), // يبدأ من الأعلى وغير مرئي
          animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // يتحرك للأسفل ويصبح مرئيًا
        ])
      ]),
      trigger('slideFadeRight', [
        transition(':enter', [
          style({ transform: 'translatex(150px)', opacity: 0 }), // يبدأ من الأعلى وغير مرئي
          animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // يتحرك للأسفل ويصبح مرئيًا
        ])
      ])
    ]
})
export class ProjectsComponent {

}
