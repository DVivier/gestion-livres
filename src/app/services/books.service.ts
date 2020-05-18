import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
   
   arrayBooks= [
      {
         id: 1,
         titre: 'monstres',
         auteur: 'Ferris',
         annee: 2017,
         nombreDePages : 500
      },
      {
         id: 2,
         titre: 'métabarons',
         auteur: 'jodo',
         annee: 1992,
         nombreDePages : 75
      },
      {
         id: 3,
         titre: 'peter pan',
         auteur: 'loisel',
         annee: 1996,
         nombreDePages : 75
      }
   ]
   
   booksSubject = new Subject<any[]>()
   
   // constructor(private httpClient: HttpClient) {}
   constructor() { }
   
   emitBooksSubject() {
      console.log('emitBooksSubject')
      // force le subject à émettre une copy (slice) du tableau  :
      this.booksSubject.next(this.arrayBooks.slice());
   }

   getBookById (id:number){
      const book = this.arrayBooks.find
      (
         (s) => {
            return s.id === id;
         }
      );
   return book;
   }
}
