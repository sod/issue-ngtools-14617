import {BigDependency, BigDependencyOptions} from 'src/app/lorem/big-dependency';
import {Injectable} from '@angular/core';

const bigDependencyLoader = () => import(/* webpackChunkName: "big-dependency" */'../lorem/big-dependency');

@Injectable({providedIn: 'root'})
export class LoremService {
    load(options: BigDependencyOptions): Promise<any> {
        return bigDependencyLoader().then((m: {BigDependency}) => new m.BigDependency().setOptions(options));
    }
}
