/** Secure Fields token update method. */
declare const updateCardToken: (token: string) => Promise<import("../../coreMethods/util/types").CardToken | undefined>;
export default updateCardToken;
