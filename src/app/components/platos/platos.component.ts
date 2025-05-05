import { Component } from '@angular/core';
import { PlatosMenuService } from '../../services/platos-menu.service';
import { CommonModule } from '@angular/common';
import { PlatoMenu } from '../../interfaces/plato-menu.iterface';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
  platos: PlatoMenu[] = [];

  constructor(private platosMenuService: PlatosMenuService) { }

  ngOnInit(): void {
    this.platosMenuService.getPlatosMenu().subscribe({
      next: (res) => {
        this.platos = res.data;
      },
      error: (err) => {
        console.error('Error fetching platos menu:', err);
      }
    })
  }
}
