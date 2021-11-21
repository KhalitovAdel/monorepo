import { IClass } from '@monorepo/types';
import { ICb } from '../interface/cb.interface';

export abstract class AbstractMetadata {
    protected cb?: ICb;

    protected constructor(
        protected readonly target: IClass,
    ) {
        console.log(this.target)
    }

    getTarget(): IClass {
        return this.target;
    }

    setCb(cb: ICb): this {
        this.cb = cb;

        return this;
    }
}
