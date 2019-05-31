import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooService} from 'src/app/foo/foo.service';
import {LazyComponent} from 'src/app/lazy/lazy.component';

@NgModule({
  declarations: [LazyComponent],
  bootstrap: [LazyComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }

console.log(new FooService());
