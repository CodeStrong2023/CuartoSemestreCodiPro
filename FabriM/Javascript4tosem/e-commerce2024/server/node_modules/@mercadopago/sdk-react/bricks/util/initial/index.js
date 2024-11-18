var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const onSubmitDefault = () => __awaiter(void 0, void 0, void 0, function* () { });
const onReadyDefault = () => { };
const onErrorDefault = (error) => {
    console.error(error);
};
const onBinChangeDefault = (bin) => {
    {
        console.log(bin);
    }
};
const onClickEditShippingDataDefault = () => {
    console.log('onClickEditShippingData default implementation');
};
const onClickEditBillingDataDefault = () => {
    console.log('onClickEditShippingData default implementation');
};
const onRenderNextStepDefault = (currentStep) => {
    console.log(currentStep);
};
const onRenderPreviousStepDefault = (currentStep) => {
    console.log(currentStep);
};
export { onErrorDefault, onReadyDefault, onSubmitDefault, onBinChangeDefault, onClickEditShippingDataDefault, onClickEditBillingDataDefault, onRenderNextStepDefault, onRenderPreviousStepDefault, };
