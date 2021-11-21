import { IMetadata } from './interface/metadata.interface';
import { IClass } from '@monorepo/types';

export class MetadataStorage {
    private static instance?: MetadataStorage;
    private readonly store = new Array<IMetadata>();

    private constructor() {}

    public set<T extends IMetadata>(m: T): void {
        this.store.push(m);
    }

    public hasByTarget(target: IClass): boolean {
        return !!this.store.find(el => el.isEqualTarget(target));
    }

    public getByTarget(target: IClass): IMetadata {
        const metadata = this.store.find(el => el.isEqualTarget(target));
        if (!metadata) throw new Error(`Metadata not found for target: ${target.name}`);

        return metadata;
    }

    public static getInstance(): MetadataStorage {
        if (this.instance) return this.instance;

        return this.instance = new this();
    }
}
