import { EnvHandler } from "../../common/env-handler";
import { Options } from "../../common/interfaces/options.interface";
import { Environments } from "../../enums/environments";
import { HelloArguments } from "./interfaces/hello-arguments.interface";

export class HelloExample extends EnvHandler<HelloArguments> {
  run(): void {
    const name = this.argv.who ?? process.env.DEFAULT_NAME;
    console.log(`Hello ${name}! `);


    console.log('\nName: ', process.env.DEFAULT_NAME);
    console.log('Env: ', process.env.ENV);
  }
}

const helloOptions: Options = {
  env: { default: Environments.Dev, choices: [Environments.Dev, Environments.Test] },
  who: { }
}

const helloExample = new HelloExample(helloOptions);

helloExample.execute();
