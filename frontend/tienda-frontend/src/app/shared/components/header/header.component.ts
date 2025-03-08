import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleCollapsed = new EventEmitter<void>();
  @Input() userEmail: string = '';
  
  onCollapse(){
    this.toggleCollapsed.emit();
  }
}
