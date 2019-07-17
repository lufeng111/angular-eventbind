import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { CssStyleComponent } from './css-style/css-style.component';
import { ModelComponent } from './model/model.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    CssStyleComponent,
    ModelComponent,
    PipelineComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
