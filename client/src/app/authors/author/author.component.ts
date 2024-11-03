import { NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorsService } from '../service/authors.service';
import { Author, Bio } from '../model/author';
import { BookNamesPipe } from 'src/app/pipes/book-names.pipe';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NgIf,BookNamesPipe],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit,OnDestroy {
  
  selectedAuthor!: Author | null;
  private subscription !: Subscription;
  private subscription2 !: Subscription; 
  private route: ActivatedRoute = inject(ActivatedRoute);
  private authorsService: AuthorsService = inject(AuthorsService);


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // getting an author initial information
      this.subscription = this.authorsService.getAuthor(id).subscribe({
        next:(auth: Author) => {
          this.selectedAuthor = auth;
          if (this.selectedAuthor != null) {
            // once we know the author is not null, get his bio if available
            this.subscription2 = this.authorsService.getAuthorBio(id).subscribe({
              next:(bio: Bio) => {
                if (this.selectedAuthor != null) {
                  if (bio.biodata != null) {
                    this.selectedAuthor.bio = bio.biodata;
                  } else {
                    this.selectedAuthor.bio = "not found";
                  }
                }
              },
              error:(_:any) => {
                if (this.selectedAuthor != null) {
                  this.selectedAuthor.bio = "not found";
                }
              }
            });
          }
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
