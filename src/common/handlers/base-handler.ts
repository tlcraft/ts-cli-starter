import { BaseArguments } from "../interfaces/base-arguments";
import { Options } from "../interfaces/options.interface";
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

export abstract class BaseHandler<T extends BaseArguments> {
    protected argv!: T;

    constructor(protected readonly options: Options = {}) { }

    execute(): void {
        this.readParameters();
        this.loadConfig();
        this.run();
    }

    protected readParameters(): void {
        this.argv = yargs(hideBin(process.argv))
            .options(this.options)
            .parse() as T;
    }

    protected loadConfig(): void {
        console.log("No environment configuration is being loaded.\n\n");
    }

    protected abstract run(): void;
}
