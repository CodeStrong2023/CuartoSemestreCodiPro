var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MercadoPagoInstance } from "../../mercadoPago/initMercadoPago";
export const getInitializationDependencies = (params, keysToExclude) => {
    const dependencies = [];
    const entries = Object.entries(params);
    for (const [key, value] of entries) {
        const shouldAdd = !keysToExclude.includes(key);
        shouldAdd && dependencies.push(value);
    }
    return dependencies;
};
const getOptions = ({ enableLuhnValidation, customFonts, placeholder, group, style, mode, }) => {
    return {
        enableLuhnValidation,
        customFonts,
        placeholder,
        group,
        style,
        mode,
    };
};
const secureFieldEvents = [
    'onValidityChange',
    'onBinChange',
    'onChange',
    'onError',
    'onFocus',
    'onReady',
    'onBlur',
];
const uncapitalizeFirstLetter = (str) => str.charAt(0).toLowerCase() + str.slice(1);
const formatEventName = (eventName) => uncapitalizeFirstLetter(eventName.slice(2));
const registerEvents = (secureFieldInstance, params) => {
    const keys = Object.keys(params);
    for (const key of keys) {
        if (secureFieldEvents.includes(key)) {
            const event = formatEventName(key);
            const callback = params[key];
            secureFieldInstance.on(event, callback);
        }
    }
};
export const initSecureField = (fieldName, params) => __awaiter(void 0, void 0, void 0, function* () {
    const options = getOptions(params);
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    const secureFieldInstance = instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.create(fieldName, options);
    if (secureFieldInstance) {
        secureFieldInstance.mount(`${fieldName}SecureField_container`);
        registerEvents(secureFieldInstance, params);
    }
    return secureFieldInstance;
});
