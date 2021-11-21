import { IClass } from '@monorepo/types';

export interface IMetadata {
    isEqualTarget(target: IClass): boolean;
}
