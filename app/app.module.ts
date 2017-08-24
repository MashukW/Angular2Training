import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { IntroductionTaskComponent } from "./introduction-task/introduction-task.component"
import { ComponentTask } from './component-task/component-task.component';

import { AppComponent } from "./app.component";
import { routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent, 
        IntroductionTaskComponent,
        ComponentTask
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}