import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationService } from './services/navigation.service';
import { tap } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cryptocurrency-shell';
  url?: SafeResourceUrl;
  isSidebarOpen?:boolean;

  constructor(
    private navigationService : NavigationService,
    domSanitizer: DomSanitizer) {
    
    this.navigationService.url$.pipe(tap(uri=>{
      this.url = domSanitizer.bypassSecurityTrustResourceUrl(uri);
    })).subscribe();

    this.navigationService.isSidebarOpen$.pipe(tap(isSidebarOpen=>{
      this.isSidebarOpen = isSidebarOpen;
    })).subscribe();
  }
}
