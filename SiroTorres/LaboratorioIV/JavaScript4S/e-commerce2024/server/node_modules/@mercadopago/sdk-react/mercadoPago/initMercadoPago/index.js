var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadMercadoPago } from '@mercadopago/sdk-js';
export class MercadoPagoInstance {
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.publicKey) {
                if (!this.loadedInstanceMercadoPago) {
                    yield loadMercadoPago();
                    this.loadedInstanceMercadoPago = true;
                }
                if (!this.instanceMercadoPago) {
                    this.instanceMercadoPago = new window.MercadoPago(this.publicKey, this.options);
                }
                return this.instanceMercadoPago;
            }
            else {
                console.error('Expected the PUBLIC_KEY to render the MercadoPago SDK React');
            }
        });
    }
}
MercadoPagoInstance.publicKey = null;
MercadoPagoInstance.options = {};
MercadoPagoInstance.instanceMercadoPago = undefined;
MercadoPagoInstance.loadedInstanceMercadoPago = false;
function isOptionsObjectUnchanged(oldOption, newOption) {
    const checkOptionObject = Object.keys(oldOption).length === Object.keys(newOption).length &&
        Object.keys(oldOption).every((key) => {
            return (Object.prototype.hasOwnProperty.call(newOption, key) && oldOption[key] === newOption[key]);
        });
    return checkOptionObject;
}
/**
 * Create an instance of MercadoPago
 * @param publicKey string
 * @param options TOptions
 */
const initMercadoPago = (publicKey, options) => {
    const injectFrontEndOption = Object.assign(Object.assign({}, options), { frontEndStack: 'react' });
    const didOptionsChange = !isOptionsObjectUnchanged(MercadoPagoInstance.options, injectFrontEndOption);
    if (publicKey !== MercadoPagoInstance.publicKey || didOptionsChange) {
        MercadoPagoInstance.publicKey = publicKey;
        MercadoPagoInstance.options = injectFrontEndOption;
        MercadoPagoInstance.instanceMercadoPago = undefined;
    }
};
export default initMercadoPago;
