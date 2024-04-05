import { YargsOptions } from '../interfaces/options.interface';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { Arguments } from 'yargs';

export abstract class BaseHandler<T extends Arguments> {
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
        console.log('No environment configuration is being loaded.\n\n');
    }

    protected abstract run(): void;
}
