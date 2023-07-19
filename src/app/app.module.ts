import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationBannerComponent } from './components/banners/presentation-banner/presentation-banner.component';
import { IndexBodyComponent } from './components/index-body/index-body.component';
import { IdentidadBannerComponent } from './components/banners/identidad-banner/identidad-banner.component';
import { ObjetivosBannerComponent } from './components/banners/objetivos-banner/objetivos-banner.component';
import { ServiciosBannerComponent } from './components/banners/servicios-banner/servicios-banner.component';
import { OfertasBannerComponent } from './components/banners/ofertas-banner/ofertas-banner.component';
import { AsociadosBannerComponent } from './components/banners/asociados-banner/asociados-banner.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PresentationBannerComponent,
    IndexBodyComponent,
    IdentidadBannerComponent,
    ObjetivosBannerComponent,
    ServiciosBannerComponent,
    OfertasBannerComponent,
    AsociadosBannerComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
