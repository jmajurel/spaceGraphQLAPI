import { BaseException } from "../../../BaseException";

export class ExistingPlanetException extends BaseException {
    constructor(msg: string = "The provided planet already existed") {
        super(msg);
        Object.setPrototypeOf(this, ExistingPlanetException.prototype);
    }
}