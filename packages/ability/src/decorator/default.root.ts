import { MetadataStorage } from '../storage';
import { IClass } from '@monorepo/types';
import { DtoMetadata } from '../metadata';

export function defaultRoot(target: IClass): DtoMetadata {
    const storage = MetadataStorage.getInstance();
    if (!storage.hasByTarget(target.constructor as IClass)) {
        const metadata = new DtoMetadata(target.constructor as IClass);
        storage.set(metadata);

        return metadata;
    }

    const metadata = storage.getByTarget(target);
    if (!DtoMetadata.isDtoMetadata(metadata)) throw new Error(`${metadata?.constructor?.name} is not instance of ${DtoMetadata.name}`);

    return metadata;
}
