import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../authors/model/author';

@Pipe({
  name: 'bookNames',
  standalone: true
})
export class BookNamesPipe implements PipeTransform {

  // present an author's books with a line break between them
  transform(value: Book[] | undefined): unknown {
    console.log("value in pipe,", value);
    if (value?.length == 0 || value == null) {
      return "This author doesn't have books yet";
    }
    return value.map((book) => `${book.title}`).join(' <br> ');
  }
}
