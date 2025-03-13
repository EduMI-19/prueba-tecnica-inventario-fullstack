import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    private apiUrl = 'http://localhost:5092';

    constructor(private http: HttpClient) { }

    getProductos(): Observable<Producto[]> {
        // return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
        const productos: Producto[] = [
            { idPro: 1, categoria: "Electrónica", nombre: "Smartphone", precio: 799.99, cantidad: 50 },
            { idPro: 2, categoria: "Ropa", nombre: "Camiseta de algodón", precio: 15.99, cantidad: 200 },
            { idPro: 3, categoria: "Hogar", nombre: "Lámpara LED", precio: 29.99, cantidad: 100 },
            { idPro: 4, categoria: "Juguetes", nombre: "Peluche de oso", precio: 22.50, cantidad: 150 },
            { idPro: 5, categoria: "Deportes", nombre: "Pelota de fútbol", precio: 19.99, cantidad: 75 },
            { idPro: 6, categoria: "Alimentos", nombre: "Cereal integral", precio: 4.99, cantidad: 300 }
        ];
        return of(productos);
    }

    getProductoById(id: string): Observable<Producto> {
        return this.http.get<Producto>(`${this.apiUrl}/productos/${id}`);
    }

    createProducto(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(`${this.apiUrl}/productos`, producto);
    }
    
    updateProducto(id: number, producto: Omit<Producto,"idPro">): Observable<Producto> {
        return this.http.put<Producto>(`${this.apiUrl}/productos/${id}`, producto);
    }
    
    deleteProducto(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/productos/${id}`);
    }
}
