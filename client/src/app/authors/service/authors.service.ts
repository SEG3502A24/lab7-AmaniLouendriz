import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author, Bio } from '../model/author';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  // this only gets authors with their id, first,last name present.
  public getAuthor(id: String): Observable<Author> {
    return this.http.get<Author>(Url+'authors/'+id);
  }

  // gets an authors biographical information
  public getAuthorBio(id:String): Observable<Bio> {
    return this.http.get<Bio>(Url+'authors/'+id+"/bio")
  }


}
