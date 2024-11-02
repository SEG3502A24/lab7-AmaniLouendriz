import { NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/books/model/book';
import { AuthorsService } from '../service/authors.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NgIf],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit,OnDestroy {
  
  selectedAuthor!: Author | null;
  private subscription !: Subscription;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private authorsService: AuthorsService = inject(AuthorsService);


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.authorsService.getAuthor(id).subscribe({
        next:(auth: Author) => {
          this.selectedAuthor = auth;
        },
        error:(_:any) => {
          this.selectedAuthor = null;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
