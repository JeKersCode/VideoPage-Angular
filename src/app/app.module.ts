import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { NextComponent } from './components/next/next.component';

const appRoutes: Routes = [
  {path: '', component: VideoPageComponent},
  {path: 'more', component: NextComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    VideoPageComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
