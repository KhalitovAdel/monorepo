import { IClass } from '@monorepo/types';
import { defaultRoot } from './default.root';
import { PropertyKeyMetadata } from '../metadata';
import { ICb } from '../interface/cb.interface';

export function allow(cb: ICb) {
    return function(target: Object, propertyKey: string | symbol) {
        const metadata = defaultRoot(target.constructor as IClass);
        const childrenMetadata = new PropertyKeyMetadata(target.constructor as IClass, propertyKey);
        if (cb) childrenMetadata.setCb(cb);

        metadata.setPrimitiveChildren(childrenMetadata);
    }
}
