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
          style({ transform: 'translatex(-150px)', opacity: 0 }), 
          animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) 
        ])
      ]),
      trigger('slideFadeRight', [
        transition(':enter', [
          style({ transform: 'translatex(150px)', opacity: 0 }), 
          animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))  
        ])
      ])
    ]
})
export class ProjectsComponent {

}
