import { Component, Input, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableComponent } from '../../shared/components/table/table.component';
import { FiltersComponent } from '../components/filters/filters.component';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [TableComponent, FiltersComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  filteredData: any[] = [];
  isAdmin: boolean = false;
  
  name: string = '';
  category: any;
  stock: any;
  

  ngOnInit() {
    this.filteredData = this.fakeData;
  }

  tableColumns: Column[] = [
    { field: 'name', header: 'Nombre' },
    { field: 'description', header: 'Descripción' },
    { field: 'price', header: 'Precio' },
    { field: 'inventory', header: 'Cantidad en Inventario' },
    { field: 'category', header: 'Categoría' }
  ];
  

  fakeData = [
    { 
      id: 1, 
      name: 'Naranja', 
      description: 'Fruta cítrica, rica en vitamina C.', 
      price: 1.5, 
      inventory: 4, 
      category: 'Fruta' 
    },
    { 
      id: 2, 
      name: 'Telefono', 
      description: 'Teléfono inteligente con pantalla táctil.', 
      price: 500, 
      inventory: 50, 
      category: 'Electrónica' 
    },
    { 
      id: 3, 
      name: 'Laptop', 
      description: 'Laptop de alto rendimiento para trabajo y juegos.', 
      price: 1200, 
      inventory: 30, 
      category: 'Electrónica' 
    },
    { 
      id: 4, 
      name: 'Manzana', 
      description: 'Fruta crujiente y dulce, muy saludable.', 
      price: 2, 
      inventory: 3, 
      category: 'Fruta' 
    },
    { 
      id: 5, 
      name: 'Naranja', 
      description: 'Fruta cítrica, rica en vitamina C.', 
      price: 1.5, 
      inventory: 100, 
      category: 'Fruta' 
    },
    { 
      id: 6, 
      name: 'Telefono', 
      description: 'Teléfono inteligente con pantalla táctil.', 
      price: 500, 
      inventory: 50, 
      category: 'Electrónica' 
    },
    { 
      id: 7, 
      name: 'Laptop', 
      description: 'Laptop de alto rendimiento para trabajo y juegos.', 
      price: 1200, 
      inventory: 30, 
      category: 'Electrónica' 
    },
    { 
      id: 8, 
      name: 'Manzana', 
      description: 'Fruta crujiente y dulce, muy saludable.', 
      price: 2, 
      inventory: 80, 
      category: 'Fruta' 
    }
  ];

  applyFilters(values: any) {
    this.filteredData = this.fakeData.filter(item => {
      const name = item.name.toLowerCase().includes(values.name.toLowerCase());
      const category = !values.category || item.category === values.category.value;
      const stock = !values.stock || item.inventory <= values.stock.value;
      return name && category && stock;
    });
    console.log('Filtros aplicados:', this.filteredData);
  }
  

  editItem(item: any) {
    console.log('Editar:', item);
  }

  deleteItem(item: any) {
    console.log('Eliminar:', item);
  }
}
