import { loadConfig } from "../../config/load-config";
import { BaseHandler } from "./base-handler";
import { EnvArguments } from "../interfaces/env-arguments.interface";
import { Options } from "../interfaces/options.interface";

export abstract class EnvHandler<T extends EnvArguments> extends BaseHandler<T> {
    constructor(protected readonly options: Options = {}) { 
        super(options);
    }

    protected loadConfig(): void {
        loadConfig(this.argv?.env);
    }
}
