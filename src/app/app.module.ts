import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookFormComponent } from './bookshelf/book-form/book-form.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';

const appRoutes: Routes = [
   { path: 'sign-up', component: SignUpComponent },
   { path: 'sign-in', component: SignInComponent },
   // { path: 'bookshelf', component: BookshelfComponent ,canActivate: [AuthGuard] },
   { path: 'bookshelf', component: BookshelfComponent  },
   // { path: 'bookshelf/:id', canActivate: [AuthGuard], component: BookDetailsComponent },
   { path: 'bookshelf/:id',  component: BookDetailsComponent },
   // { path: 'add-book', canActivate: [AuthGuard], component: BookFormComponent },
   { path: 'add-book',  component: BookFormComponent },
   { path: '', redirectTo: 'bookshelf', pathMatch: 'full'},
   { path: '**', redirectTo: 'bookshelf'}
   // { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
   // { path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent },
   // { path: 'not-found', component: FourOhFourComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BookshelfComponent,
    BookDetailsComponent,
    BookFormComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
     AuthGuardService,
     AuthService,
     BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
