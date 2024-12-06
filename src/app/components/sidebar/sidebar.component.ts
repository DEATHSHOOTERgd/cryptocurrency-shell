import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarOpen = true;

  constructor(private navigationService:NavigationService){

  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  setAppUrl(url:string){
    this.navigationService.setUrl(url);
  }
}
