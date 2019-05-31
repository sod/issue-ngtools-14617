import {Component} from '@angular/core';
import {LoremService} from 'src/app/lorem/lorem.service';
import {BigDependencyOptions} from 'src/app/lorem/big-dependency';

@Component({
    template: '<button (click)="loremService.load(options)">Load big dependency</button>',
})
export class LazyComponent {
    public options: BigDependencyOptions = {option1: '123', option2: '321'};

    constructor(public loremService: LoremService) {
    }
}
