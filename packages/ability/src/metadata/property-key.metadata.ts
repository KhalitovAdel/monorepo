import { AbstractMetadata } from './abstract.metadata';
import { IClass } from '@monorepo/types';

export class PropertyKeyMetadata extends AbstractMetadata {
    constructor(
        protected readonly target: IClass,
        private readonly propertyKey: string | symbol
    ) {
        super(target);
        console.log(this.target, this.propertyKey, this.cb);
    }
}
