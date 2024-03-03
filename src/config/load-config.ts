import * as dotenv from "dotenv";
import { Environments } from "../enums/environments";

export const loadConfig = (env: string): void => {
    console.log(`Loading ${env} config...`);

    dotenv.config({ path: __dirname + '/.env-common' });

    switch (env) {
        case Environments.Dev:
            dotenv.config({ path: __dirname + `/.env-${Environments.Dev}` });
            break;
        case Environments.Test:
            dotenv.config({ path: __dirname + `/.env-${Environments.Test}` });
            break;
        default:
            throw new Error(`Environment not supported: ${env}`);
    }
}
