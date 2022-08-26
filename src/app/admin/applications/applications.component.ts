import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Info } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit, OnDestroy {

  info!: Info[]
  pSub!: Subscription
  dSub!: Subscription

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.info = posts
    })
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

  remove(id: string | undefined) {
    if (typeof id === undefined) {
      return
    } else {
      this.dSub = this.postsService.remove(id).subscribe(() => {
        this.info = this.info.filter(item => item.id !== id)
      })
    }

  }


}
