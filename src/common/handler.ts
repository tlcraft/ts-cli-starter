import { Options } from "./interfaces/options.interface";
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

export abstract class BaseHandler<T> {
    protected argv!: T;

    constructor(private readonly options: Options = {}) { }

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
        // load the env from common config
        console.log("Args: ", this.argv);
    }

    protected abstract run(): void;
}
