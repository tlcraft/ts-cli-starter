import { Options } from 'yargs';

// See https://github.com/yargs/yargs/blob/0c95f9c79e1810cf9c8964fbf7d139009412f7e7/docs/api.md#options
export interface YargsOptions {
    [key: string]: Options;
}
