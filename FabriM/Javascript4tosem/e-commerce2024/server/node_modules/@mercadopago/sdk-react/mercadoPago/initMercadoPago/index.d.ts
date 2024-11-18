import { TInstanceMercadoPago, TOptions } from './type';
export declare class MercadoPagoInstance {
    static publicKey: string | null;
    static options: TOptions;
    static instanceMercadoPago?: TInstanceMercadoPago;
    static loadedInstanceMercadoPago: boolean;
    static getInstance(): Promise<TInstanceMercadoPago | undefined>;
}
/**
 * Create an instance of MercadoPago
 * @param publicKey string
 * @param options TOptions
 */
declare const initMercadoPago: (publicKey: string, options?: TOptions) => void;
export default initMercadoPago;
