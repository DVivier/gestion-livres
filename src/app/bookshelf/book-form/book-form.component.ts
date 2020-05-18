import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { BooksService } from 'src/app/services/books.service';
import { BooksService } from '../../services/books.service';

@Component({
   selector: 'app-book-form',
   templateUrl: './book-form.component.html',
   styleUrls: ['./book-form.component.scss']
})

export class BookFormComponent implements OnInit {
   
   constructor(private router:Router, private bookService:BooksService ) { }
   
   ngOnInit(): void {
   }
   
   
   onSubmit(form: NgForm) {
      console.log(form.value);
      
      const titre = form.value['titre'];
      const auteur = form.value['auteur'];
      const annee = form.value['annee'];
      const nombreDePages = form.value['nombreDePages'];
      
      this.bookService.addBook(titre, auteur, annee,nombreDePages);
      this.router.navigate(['/bookshelf']);
   }
}
