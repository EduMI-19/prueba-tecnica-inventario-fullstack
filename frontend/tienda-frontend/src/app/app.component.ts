import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule, SidebarModule, ButtonModule, HeaderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';
  isSidebarCollapsed:boolean = false;
  screenWidth:number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.updateScreenWidth();
  }
  
  ngOnInit(): void {
    this.updateScreenWidth();
  }

  collapseEvent(){
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  updateScreenWidth(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 768) {
        this.isSidebarCollapsed = false;
      }
    }
  }

  getBodyClass():string{
    let styleClass = '';
    if(this.isSidebarCollapsed && this.screenWidth > 768){
      styleClass = 'body-trimed';
    } else if(this.isSidebarCollapsed && this.screenWidth <=768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
