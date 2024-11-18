import React, { useEffect } from 'react';
import { getInitializationDependencies, initSecureField } from '../util';
import { DEBOUNCE_TIME_RENDER } from '../../bricks/util/constants';
const ExpirationYear = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('expirationYear', params)
                .then(instance => window.expirationYearInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.expirationYearInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationYearInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "expirationYearSecureField_container" });
};
export default ExpirationYear;
