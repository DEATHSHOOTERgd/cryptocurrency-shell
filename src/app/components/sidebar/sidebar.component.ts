import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarOpen = true;

  appRoutes:any[] = [];

  constructor(private navigationService:NavigationService){
    this.appRoutes=environment.appRoutes;
    this.navigationService.isSidebarOpen$.pipe(tap(isSidebarOpen=>{
      this.isSidebarOpen = isSidebarOpen;
    })).subscribe();
  }

  toggleSidebar() {
    this.navigationService.setIsSidebarOpen();
  }

  setAppUrl(url:string){
    this.navigationService.setUrl(url);
  }
}
