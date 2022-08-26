import { Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalPageComponent } from 'src/app/modal-page/modal-page.component';
import { Info } from '../../interfaces';
import { PostsService } from '../../posts.service';
import { RefDirective } from '../../ref.directive';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {



  form!: FormGroup



  @ViewChild(RefDirective) refDif!: RefDirective
  constructor(private postsService: PostsService, private resolver: ComponentFactoryResolver) { }

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

  showModal() {
    const modalFectory = this.resolver.resolveComponentFactory(ModalPageComponent)
    this.refDif.containerRef.clear()

    const component = this.refDif.containerRef.createComponent(modalFectory)
    component.instance.close.subscribe(() => {
      this.refDif.containerRef.clear()
    })
  }

  @HostListener('window:scroll',)
  showModals() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      const modalFectory = this.resolver.resolveComponentFactory(ModalPageComponent)
      this.refDif.containerRef.clear()
      const component = this.refDif.containerRef.createComponent(modalFectory)
      component.instance.close.subscribe(() => {
        this.refDif.containerRef.clear()
      })
    }
  }

}
