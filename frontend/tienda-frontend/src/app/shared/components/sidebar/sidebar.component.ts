import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() collapsed:boolean=false;
  isModalActive:boolean = false;
  screenWidth:number = 0;
  
  sidebarData = [
    {
        routeLink: 'dashboard',
        icon: 'pi pi-gauge',
        label: 'Dashboard'
    },
    {
        routeLink:'producto',
        icon:'pi pi-box',
        label:'Producto'
    }
]

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.updateScreenWidth();
  }
  
  ngOnInit(): void {
    this.updateScreenWidth();
  }

  closeSidenav():void{
    this.collapsed = false
  }

  updateScreenWidth(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 768) {
        this.collapsed = false;
      } else if(this.collapsed && this.screenWidth <=768 && this.screenWidth > 0){
        this.isModalActive = true;
      }
    }
  }
}
