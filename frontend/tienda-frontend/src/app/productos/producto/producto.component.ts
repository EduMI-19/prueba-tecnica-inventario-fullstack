import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/components/table/table.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { ModalComponent } from '../components/modal/modal.component';
import { ProductoService } from '../../shared/services/producto.service';
import { Producto } from '../../shared/models/producto.model';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [TableComponent, FiltersComponent, ModalComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  isAdmin: boolean = true;
  modalTitle: string = '';
  idPro: number = 0;
  isEdit: boolean = false;
  
  showModal = false;
  categories = [
    { name: 'Fruta', value: 'Fruta' },
    { name: 'Electrónica', value: 'Electrónica' }
  ];
  
  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  tableColumns: Column[] = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'description', header: 'Descripción' },
    { field: 'precio', header: 'Precio' },
    { field: 'cantidad', header: 'Cantidad en Inventario' },
    { field: 'categoria', header: 'Categoría' }
  ];

  applyFilters(values: any) {
    this.productos = this.productos.filter(item => {
      const name = item.nombre?.toLowerCase().includes(values.name.toLowerCase());
      const category = !values.category || item.categoria === values.category.value;
      const stock = !values.stock || item.cantidad <= values.stock.value;
      return name && category && stock;
    });
    console.log('Filtros aplicados:', this.productos);
  }

  editItem(item: Producto) {
    this.idPro = item.idPro;
    this.showModal = true;
    this.modalTitle = 'Editar producto';
    this.isEdit = true;
  }

  onProductSave(productData: Producto) {
    console.log('Datos a guardar:', productData);
    return productData;
  }

  deleteItem(item: Producto) {
    console.log('Eliminar:', item.idPro);
    this.productoService.deleteProducto(item.idPro).subscribe(() => {
      this.productos = this.productos.filter(p => p.idPro !== item.idPro);
    });
  }

  notifyItem(item: Producto) {
    console.log('Notificar:', item);
  }

  openModal() {
    this.showModal = true;
    this.modalTitle = 'Nuevo producto';
    this.isEdit = false;
  }

  handleSave(productData: Producto) {
    console.log('Datos:', productData);
    console.log('Producto id', this.idPro);
    if (this.isEdit) {
      console.log('Actualizando producto');
      
    } else {
      console.log('Creando producto');
      
    }
    this.showModal = false;
  }
}
