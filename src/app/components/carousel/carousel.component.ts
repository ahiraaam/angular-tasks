import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    "https://unsm.edu.pe/wp-content/uploads/2017/01/portada-idiomas.jpg",
    "https://www.fundacionunam.org.mx/wp-content/uploads/2017/10/idiomas_portada.jpg",
    "https://blog.ihmexico.mx/hubfs/Blog/2020/enero_2020/carreras-estudiar-gusto-por-idiomas.jpg",

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
