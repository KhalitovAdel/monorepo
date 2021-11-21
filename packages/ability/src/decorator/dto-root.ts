import { IClass } from '@monorepo/types';
import { ICb } from '../interface/cb.interface';
import { defaultRoot } from './default.root';

export function DtoRoot(dto: IClass, role: string, cb?: ICb) {
    return function(constructor: IClass): void  {
        const metadata = defaultRoot(constructor);
        metadata.setDto(dto).setRole(role);
        if (cb) metadata.setCb(cb);
    }
}
