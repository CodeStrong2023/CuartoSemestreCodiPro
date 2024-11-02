import React, { useEffect } from 'react';
import { getInitializationDependencies, initSecureField } from '../util';
import { DEBOUNCE_TIME_RENDER } from '../../bricks/util/constants';
const SecurityCode = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder', 'length', 'mode']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('securityCode', params)
                .then(instance => window.securityCodeInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.securityCodeInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.securityCodeInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "securityCodeSecureField_container" });
};
export default SecurityCode;
