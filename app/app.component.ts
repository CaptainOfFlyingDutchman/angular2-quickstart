import {Component} from 'angular2/core';
import {GravatarImageComponent} from './gravatar-image.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        
        <p>{{description}}</p>
        
        <input type="text" [(ngModel)]="title" placeholder="Heading here">
        
        <gravatar-image></gravatar-image>
        <gravatar-image [size]="220" [email]="'manvendrasingh.1990@gmail.com'"></gravatar-image>
    `,
    directives: [GravatarImageComponent]
})
export class AppComponent {
    title:String = "Angular 2 Bootstrap";
    description:String = "My first Angular 2 app's description";
}