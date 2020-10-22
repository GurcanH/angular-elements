import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GreeterComponent } from "./greeter.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [GreeterComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [GreeterComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(GreeterComponent, { injector: injector });
    customElements.define("do-greet", el);
  }

  ngDoBootstrap() {}
}
