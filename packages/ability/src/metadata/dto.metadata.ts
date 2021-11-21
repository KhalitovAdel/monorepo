import { AbstractMetadata } from './abstract.metadata';
import { IClass } from '@monorepo/types';


export class DtoMetadata extends AbstractMetadata {
    private dto?: IClass;
    private role?: string;
    private readonly children = new Array<AbstractMetadata>();

    constructor(
        protected readonly target: IClass,
        ) {
        super(target);
        console.log(this.target, this.dto, this.role, this.cb)
    }

    isEqualTarget(target: IClass): boolean {
        return this.target === target;
    }

    public setDto(value: IClass): this {
        this.dto = value;

        return this;
    }

    public setRole(value: string): this {
        this.role = value;

        return this;
    }

    public setPrimitiveChildren(m: AbstractMetadata): void {
        this.children.push(m);
    }

    public static isDtoMetadata(target: unknown): target is DtoMetadata {
        return target instanceof DtoMetadata;
    }
}
