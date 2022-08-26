import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Info } from '../shared/interfaces';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {



  form!: FormGroup
  @Output() close = new EventEmitter<void>()
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      tel: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      wish: new FormControl('')
    })
  }




  submit() {
    if (this.form.invalid) {
      return
    }

    const info: Info = {
      tel: this.form.value.tel,
      name: this.form.value.name,
      wish: this.form.value.wish,
      date: new Date()
    }

    this.postsService.create(info).subscribe(() => {
      this.form.reset()

    })
  }
}
