import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerHTML = "Anguler приложение для покупки товаров";
  }
}
