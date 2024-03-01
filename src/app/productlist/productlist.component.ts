import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  furnitureList = [
    { id: 1, name: 'Hall interior', price: 50000, image: 'assets/image/c1.png' },
    { id: 2, name: 'sofa', price: 7000, image: 'assets/image/c2.png' },
    { id: 3, name: 'modern sofa', price: 10000, image: 'assets/image/c3.png' },
    { id: 4, name: 'chair', price: 4000, image: 'assets/image/ch.png' },
    // Add more furniture items as needed
  ];

  selectedFurniture: any;

  showDetails(item: any): void {
    this.selectedFurniture = item;
  }
}
