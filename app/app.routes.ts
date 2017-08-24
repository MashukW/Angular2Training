import { Routes } from "@angular/router";

import { IntroductionTaskComponent } from "./introduction-task/introduction-task.component";
import { ComponentTask } from "./component-task/component-task.component";

export const routes: Routes = [
    { path: "", redirectTo: "introduction", pathMatch: "full" },
    { path: "introduction", component: IntroductionTaskComponent },
    { path: "component", component: ComponentTask }
]