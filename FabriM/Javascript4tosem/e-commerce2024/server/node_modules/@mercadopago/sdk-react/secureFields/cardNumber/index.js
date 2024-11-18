import React, { useEffect } from 'react';
import { getInitializationDependencies, initSecureField } from '../util';
import { DEBOUNCE_TIME_RENDER } from '../../bricks/util/constants';
const CardNumber = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder', 'length']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('cardNumber', params)
                .then(instance => window.cardNumberInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.cardNumberInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.cardNumberInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "cardNumberSecureField_container" });
};
export default CardNumber;
