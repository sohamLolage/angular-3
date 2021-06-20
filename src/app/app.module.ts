import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { FormgroupExampleComponent } from './components/formgroup-example/formgroup-example.component';
import { FormbuilderExampleComponent } from './components/formbuilder-example/formbuilder-example.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    FormgroupExampleComponent,
    FormbuilderExampleComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
