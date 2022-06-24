export class BaseException extends Error {
    constructor(msg?: string) {
        super(!!msg ? msg : "An exception occured");
        Object.setPrototypeOf(this, BaseException.prototype);
    }
}