import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, DialogModule, ButtonModule, InputTextModule, InputNumberModule, DropdownModule ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
  productForm!: FormGroup;

  @Input() categories: any[] = [];
  @Input() visible: boolean = false;
  @Input() modalTitle: string = '';
  
  @Output() save = new EventEmitter<any>();
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(data?: any): void {
    this.productForm = this.fb.group({
      id: [data?.id || null],
      name: [data?.name || '', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      description: [data?.description || '', Validators.maxLength(255)],
      price: [data?.price || 0, [
        Validators.required,
        Validators.min(0.1)
      ]],
      inventory: [data?.inventory || 0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^[0-9]*$/)
      ]],
      category: [data?.category || null, Validators.required]
    });
  }

  saveProduct() {
    if (this.productForm.invalid) return;
    
    this.save.emit(this.productForm.value);
    this.closeModal();
  }

  closeModal() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.productForm.reset(); 
  }
}
