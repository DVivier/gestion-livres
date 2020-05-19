import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,  } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
   selector: 'app-book-form',
   templateUrl: './book-form.component.html',
   styleUrls: ['./book-form.component.scss']
})

export class BookFormComponent implements OnInit {
   
   constructor(private router:Router, 
               private bookService:BooksService,
               private formBuilder:FormBuilder ) { }
   
   bookForm : FormGroup;

   bookFormMessages = {
      'nombreDePages' : [
         {type: 'required', message : 'Le nombre de pages est obligatoire'},
         {type: 'min', message : 'Le livre doit comporter au moins 10 pages'},
         {type: 'pattern', message : 'Ce champ doit être numérique'}
      ],
      'annee' : [
         {type: 'required', message : "L'année est obligatoire"},
         {type: 'pattern', message : "L'année doit être sur 4 chiffres"}
      ]
   }

   ngOnInit(): void {
      this.initForm();
   }
   
   initForm(){

      this.bookForm = this.formBuilder.group({
         titre : ['', Validators.required],
         auteur : ['', Validators.required],
         annee : new FormControl('', Validators.compose([
            Validators.pattern('[0-9]{4}'),
            Validators.required
         ])),
         nombreDePages : new FormControl('', Validators.compose([
            Validators.min(10),
            Validators.pattern('[0-9]*'),
            Validators.required
         ]))
      });
   }
   
   onSubmit() {
      // console.log(form.value);
      console.log(this.bookForm.value);
      
      const titre = this.bookForm.get('titre').value;
      const auteur = this.bookForm.get('auteur').value;
      const annee = this.bookForm.get('annee').value;
      const nombreDePages = this.bookForm.get('nombreDePages').value;
      
      this.bookService.addBook(titre, auteur, annee, nombreDePages);
      this.router.navigate(['/bookshelf']);
   }
}
