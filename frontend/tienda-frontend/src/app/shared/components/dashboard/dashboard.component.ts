import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../../../auth/login/login.component';
import { RegisterComponent } from '../../../auth/register/register.component';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule, SidebarModule, ButtonModule, HeaderComponent, LoginComponent, RegisterComponent],
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
       private router: Router
    ) {}
  title = 'tienda-frontend';
    isSidebarCollapsed:boolean = false;
    screenWidth:number = 0;
    session:boolean = false;
    register:boolean = false;
    username: string = '';
  
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
    onsessionChanged(event:boolean){
      this.session = event;
      this.router.navigate(['/']);

      console.log('Sesion:', this.session);
    }
}
