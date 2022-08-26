import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Price } from 'src/app/shared/interfaces';
import { SetPriceService } from 'src/app/shared/setPrice.service';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.scss']
})
export class EditPriceComponent implements OnInit {

  form!: FormGroup

  constructor(private setPriceService: SetPriceService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      oneD: new FormControl('', Validators.required),
      twoD: new FormControl('', Validators.required),
      threeD: new FormControl('', Validators.required),
      fourD: new FormControl('', Validators.required),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    const price: Price = {
      oneD: this.form.value.oneD,
      twoD: this.form.value.twoD,
      threeD: this.form.value.threeD,
      fourD: this.form.value.fourD,
    }

    this.setPriceService.setPrice(price).subscribe(() => {
      this.form.reset()
    })
  }

}
