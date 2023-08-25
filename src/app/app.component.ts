import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerHTML = "Anguler приложение для покупки товаров";
  }
}
