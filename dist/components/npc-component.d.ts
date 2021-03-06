import { ComponentWrapper } from '../essential/aframe-wrapper';
declare global {
    interface Window {
        coin: any;
    }
}
interface NPCComponentSchema {
    readonly canStart: boolean;
}
export declare class NPCComponent extends ComponentWrapper<NPCComponentSchema> {
    constructor();
    init(): void;
    update(): void;
    play(): void;
    pause(): void;
    tick(): void;
    remove(): void;
    destroy(): void;
}
export {};
