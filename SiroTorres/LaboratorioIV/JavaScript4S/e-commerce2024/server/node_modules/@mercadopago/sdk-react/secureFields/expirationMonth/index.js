import React, { useEffect } from 'react';
import { getInitializationDependencies, initSecureField } from '../util';
import { DEBOUNCE_TIME_RENDER } from '../../bricks/util/constants';
const ExpirationMonth = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('expirationMonth', params)
                .then(instance => window.expirationMonthInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.expirationMonthInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationMonthInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "expirationMonthSecureField_container" });
};
export default ExpirationMonth;
