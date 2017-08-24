import { Component } from '@angular/core';

const VALUES: Array<string> = [ 
        "Hello World", 
        "Привет Мир",
        "Привіт Світ", 
        "Hola Mundo", 
        "Bonjour le monde", 
        "Hallo Welt", 
        "Ciao mondo", 
        "Witaj świecie", 
        "Hej världen", 
        "Pozdravljen, svet", 
        "Прывітанне Сусвет"
];

@Component({
    moduleId: module.id,
    selector: "introduction-task",
    templateUrl:"introduction-task.template.html",
    styleUrls: ["introduction-task.style.css"]
})
export class IntroductionTaskComponent {
    ItemsList: Array<string> = VALUES;
}