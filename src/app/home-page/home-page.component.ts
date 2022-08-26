import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../shared/posts.service';

import { RefDirective } from '../shared/ref.directive';
import { ModalPageComponent } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  toggle = true



  msInDay = 86400000;
  dateComeUser: string = localStorage.getItem('dateComeUser') ?? new Date().toString()
  deadline = Date.parse(this.dateComeUser) + this.msInDay
  dateNow!: number
  endDate!: Date

  @ViewChild(RefDirective) refDif!: RefDirective

  constructor(private postsService: PostsService, private resolver: ComponentFactoryResolver) {
    if (localStorage.getItem('toggle')) {
      this.toggle = false
    }

  }





  ngOnInit(): void {
    this.updateClock();
    setInterval(() => {
      this.dateNow = Date.parse(new Date().toString())
      this.endDate = new Date(this.deadline - this.dateNow - 10800000)
    }, 1000)


  }

  setTimeLocalStorage() {
    if (localStorage.getItem('dateComeUser')) {
      this.toggle = false
      return
    }
    localStorage.setItem('dateComeUser', new Date().toString())
    localStorage.setItem('toggle', ' ')
    this.toggle = false
  }

  updateClock() {
    this.dateNow = Date.parse(new Date().toString())
    this.endDate = new Date(this.deadline - this.dateNow - 10800000)
  }


  showModal() {
    const modalFectory = this.resolver.resolveComponentFactory(ModalPageComponent)
    this.refDif.containerRef.clear()
    document.body.style.overflow = 'hidden';

    this.refDif.containerRef.createComponent(modalFectory)
    const component = this.refDif.containerRef.createComponent(modalFectory)
    component.instance.close.subscribe(() => {
      this.refDif.containerRef.clear()
      document.body.style.overflow = 'auto';
    })
  }


}
