import {Component, Input} from 'angular2/core';
import {md5} from './md5';

@Component({
    selector: 'gravatar-image',
    template: `
        <div id="container">
            <img [src]="getGravatarImage()">
            <input [(ngModel)]="email" type="email" placeholder="Enter your Gravatar email">
        </div>
    `,
    styles: [`
          #container {
              display: block;
          }
          img {
              display: block;
          }
          input {
            margin-top: 5px;
            padding: 2px;
            -moz-border-bottom-colors: none;
            -moz-border-left-colors: none;
            -moz-border-right-colors: none;
            -moz-border-top-colors: none;
            background-clip: padding-box;
            background-color: transparent;
            border-color: -moz-use-text-color -moz-use-text-color #999;
            border-image: none;
            border-radius: 0;
            border-style: none none dotted;
            border-width: medium medium 1px;
            box-shadow: 0 0 0 transparent;
            display: inline-block;
            font-size: 14px;
            min-width: 200px;
            outline: medium none;
            text-align: center;
          }
    `]
})
export class GravatarImageComponent {
    @Input() size:number = 200;
    @Input() email:string = "";
    
    getGravatarImage():string {
        return 'http://www.gravatar.com/avatar/' + md5(this.email) + '?s=' + this.size;
    }
}