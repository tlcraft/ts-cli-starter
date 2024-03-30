import { BaseArguments } from "../interfaces/base-arguments.interface";
import { YargsOptions } from "../interfaces/options.interface";
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export abstract class BaseHandler<T extends BaseArguments> {
    protected argv!: T;

    constructor(protected readonly options: YargsOptions = {}) { }

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
