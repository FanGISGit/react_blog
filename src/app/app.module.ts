import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { NewpostComponent } from './newpost/newpost.component';
import { HeaderComponent } from './header/header.component';

import { SerPostsService } from './services/ser-posts.service';

const appRoutes: Routes = [
  { path: 'newpost', component: NewpostComponent },
  { path: 'postlist', component: PostListComponentComponent },
  { path: '', redirectTo: 'postlist', pathMatch: 'full' },
  { path: '**', redirectTo: 'postlist' }
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    NewpostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
      SerPostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
