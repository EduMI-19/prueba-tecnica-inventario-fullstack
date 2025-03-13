import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  @Input() collapsed:boolean = false;
  screenWidth:number = 0;
  @Output() logout : EventEmitter<boolean> = new EventEmitter<boolean>();

  sidebarData = [
    {
        routeLink:'productos/producto',
        icon:'pi pi-box',
        label:'Producto'
    }
  ];


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
      }
    }
  }

  onLogout():void{
    this.logout.emit(false);
  }
}
