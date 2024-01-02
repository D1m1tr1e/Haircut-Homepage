import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuIsOpen = false;

  openMenu() {
    let menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.classList.toggle("change");
    }
    this.openMobileMenu();
  }

  openMobileMenu() {
    if (!this.mobileMenuIsOpen) {
      document.getElementById('mobile-container')?.classList.remove('d-none');
      this.mobileMenuIsOpen = true;
    } else if (this.mobileMenuIsOpen) {
      this.mobileMenuIsOpen = false;
        document.getElementById('mobile-container')?.classList.add('d-none');
      }
    }

  }


