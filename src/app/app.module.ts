import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { DetailsComponent } from './components/details/details.component';
import { profitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { RouterModule } from '@angular/router';
import { appRoutesModule } from './modules/app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ModalComponent,
    SearchComponent,
    NotAuthorizedComponent,
    LoaderComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    DetailsComponent,
    DetailsActorsComponent,

    //pipes
    profitPipe,
    // 404 not found page
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
