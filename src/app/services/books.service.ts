import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
   
   arrayBooks= [   ]

      
   booksSubject = new Subject<any[]>()
   
   // constructor(private httpClient: HttpClient) {}
   constructor(private httpClient: HttpClient) { }
   

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
      
      
   addBook(titre: any, auteur: any, annee: any, nombreDePages: any) {
      // console.log('entre dans add')

      const nouveauLivre = {
         id: 0,
         titre: '',
         auteur: '',
         annee: 0,
         nombreDePages: 0
       };
       
       nouveauLivre.titre = titre;
       nouveauLivre.auteur = auteur;
       nouveauLivre.annee = annee;
       nouveauLivre.nombreDePages = nombreDePages;
       nouveauLivre.id = this.arrayBooks[(this.arrayBooks.length - 1)].id + 1;
       this.arrayBooks.push(nouveauLivre);
       this.emitBooksSubject();
       this.saveBookshelfToServer();
      
   }
   
   saveBookshelfToServer() {
      this.httpClient
         .put('https://biblio-dams-1011f.firebaseio.com//books.json', this.arrayBooks)
      //   .post('https://prems-dv.firebaseio.com//appareils.json', this.tableauAppareilsService)
         .subscribe(
         () => {
            console.log('Enregistrement terminé !');
         },
            (error) => {
               console.log('Erreur ! : ' + error);
            }
         );
  }

   // Récupération des infos depuis le serveur
   // le get renvoie un objet ; il est donc nécessaire de faire un cast du retour via le <any[]>
   getBookshelfFromServer() {
      this.httpClient
         .get<any[]>('https://biblio-dams-1011f.firebaseio.com//books.json')
         .subscribe(
            (response) => {
               this.arrayBooks = response;
               this.emitBooksSubject();
            },
            (error) => {
               console.log('Erreur ! : ' + error);
            }
         );
   }
}
   
