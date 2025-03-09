import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [DropdownModule, FormsModule, InputTextModule, ButtonModule,],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Input() isAdmin: boolean = false;
  nameFilter: string = '';
  selectedCategory: any;
  selectedStock: any;

  @Output() applyFilters: EventEmitter<any> = new EventEmitter<any>();


  categories = [
    { label: 'Fruta', value: 'Fruta' },
    { label: 'Electrónica', value: 'Electrónica' }
  ];

  stocks = [
    { label: 'Stock bajo', value: 5 }
  ]

  onSearch() {
    const values = {
      name: this.nameFilter,
      category: this.selectedCategory,
      stock: this.selectedStock
    }
    this.applyFilters.emit(values);
    console.log(values);

    console.log('Filters applied');
  }
}