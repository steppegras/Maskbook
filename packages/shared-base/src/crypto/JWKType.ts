export type JsonWebKeyPair<Pub extends JsonWebKey & Nominal<unknown>, Priv extends JsonWebKey & Nominal<unknown>> = {
    publicKey: Pub
    privateKey: Priv
}
// Create nominal typing interfaces for different JsonWebKey type
// So they will no longer assignable to each other

export type EC_JsonWebKey = EC_Private_JsonWebKey | EC_Public_JsonWebKey
export interface EC_Public_JsonWebKey extends JsonWebKey, Nominal<'EC public'> {}
export interface EC_Private_JsonWebKey extends JsonWebKey, Nominal<'EC private'> {}
export interface AESJsonWebKey extends JsonWebKey, Nominal<'AES'> {}

declare class Nominal<T> {
    /** Ghost property, don't use it! */
    private __brand: T
}
