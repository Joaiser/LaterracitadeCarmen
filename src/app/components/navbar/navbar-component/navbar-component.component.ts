import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { MenuNavegacionService } from '../../../services/menu-navegacion.service';
import { Enlace, StrapiResponse } from '../../../interfaces/nav/enlaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  menuItems: Enlace[] = [];
  menuOpen: boolean = false;

  constructor(private menuNavegacionService: MenuNavegacionService,
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.menuNavegacionService.getMenuNavegacion().subscribe((res: StrapiResponse<Enlace>) => {
      this.menuItems = res.data;
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}