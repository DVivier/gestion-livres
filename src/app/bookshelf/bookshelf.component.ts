import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

   arrayBooks: any[];
   booksSuscription: Subscription;

   constructor(private booksService: BooksService) { 

   }

   ngOnInit(): void {
      console.log("BookshelfComponent - ngOnInit - début")
      this.booksSuscription = this.booksService.booksSubject.subscribe(
         ( books:any[] ) => {this.arrayBooks=books}
      );
      
      console.log("BookshelfComponent - ngOnInit - avant emit")
      this.booksService.emitBooksSubject();
      // console.log("nombre de poste :" + this.arrayBooks.length)
      if (this.arrayBooks.length == 0) {
         this.booksService.getBookshelfFromServer();
      }
   }  


}
