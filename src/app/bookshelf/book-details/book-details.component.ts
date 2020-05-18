import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

   titre: string;
   auteur: string;
   annee: number;
   nombreDePages: number;

   constructor(private booksService: BooksService,
               private route: ActivatedRoute) {    }

   
   ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.titre = this.booksService.getBookById(+id).titre;     // +id : cast, car snapshot renvoie un string, alors que notre fonction s'attend à un number
      this.auteur = this.booksService.getBookById(+id).auteur;
      this.annee = this.booksService.getBookById(+id).annee;
      this.nombreDePages = this.booksService.getBookById(+id).nombreDePages;
      
   }
}
