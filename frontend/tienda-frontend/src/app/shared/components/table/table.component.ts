import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule, ButtonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input() columns: Column[] = [];
  @Input() data: any[] = [];
  @Input() showActions: boolean = true;
  
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onNotify = new EventEmitter<any>();
  isActive: boolean = false;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm(data: Event) {
    this.confirmationService.confirm({
        target: data as any,
        message: 'Quieres eliminar este elemnto?',
        header: 'Confirmar Eliminación',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
          this.onDelete.emit(data);
        },
        reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }

  notify(data: Event) {
    this.onNotify.emit(data);
    this.messageService.add({ severity: 'success', summary: 'Notificación enviada', detail: 'Se ha notificado al administrador' });
  }

  lowStock(produc : any): boolean {
    if(produc.inventory <= 5){
      return false;
    }
    return true;
  }
}
