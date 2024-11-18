import React, { useEffect } from 'react';
import { getInitializationDependencies, initSecureField } from '../util';
import { DEBOUNCE_TIME_RENDER } from '../../bricks/util/constants';
const ExpirationDate = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('expirationDate', params)
                .then(instance => window.expirationDateInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.expirationDateInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationDateInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "expirationDateSecureField_container" });
};
export default ExpirationDate;
