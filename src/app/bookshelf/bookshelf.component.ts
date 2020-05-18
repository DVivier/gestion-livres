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

   constructor(private bookService: BooksService) { 

   }

   ngOnInit(): void {
      console.log("BookshelfComponent - ngOnInit - début")
      this.booksSuscription = this.bookService.booksSubject.subscribe(
         ( books:any[] ) => {this.arrayBooks=books}
      );
      
      console.log("BookshelfComponent - ngOnInit - avant emit")
      this.bookService.emitBooksSubject();
      // console.log("nombre de poste :" + this.arrayBooks.length)
   }  

}
