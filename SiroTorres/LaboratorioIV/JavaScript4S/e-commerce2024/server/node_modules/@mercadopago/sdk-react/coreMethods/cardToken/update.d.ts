import type { CardTokenUpdateParams } from "./types";
/** Token update method. */
declare const updateCardToken: (paymentMethodsParams: CardTokenUpdateParams) => Promise<import("../util/types").CardToken | undefined>;
export default updateCardToken;
