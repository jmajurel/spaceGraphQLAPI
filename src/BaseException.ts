export class BaseException {
    constructor(msg?: string) {
        throw !!msg ? msg : "An exception occured";
    }
}