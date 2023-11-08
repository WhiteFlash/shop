import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  authService = inject(AuthService);
  router = inject(Router)

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerHTML = "Anguler приложение для покупки товаров";
  }

  changeIsAdmin() {
    this.authService.isAdmin ? false : true;
    this.authService.isLoggedIn ? false : true;
    this.router.navigate(['admin']);
  }
}
// ok
