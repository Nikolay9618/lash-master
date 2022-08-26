import { Component, OnInit } from '@angular/core';
import { Price } from '../shared/interfaces';
import { SetPriceService } from '../shared/setPrice.service';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PricePageComponent implements OnInit {
  price!: Price
  constructor(private setPriceService: SetPriceService) { }

  ngOnInit(): void {
    this.setPriceService.getPrice().subscribe(price => {
      this.price = price
    })
  }

}
