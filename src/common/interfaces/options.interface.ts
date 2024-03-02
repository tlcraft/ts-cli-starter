export interface Options {
    [key: string]: OptParams;
}

// See https://github.com/yargs/yargs/blob/0c95f9c79e1810cf9c8964fbf7d139009412f7e7/docs/api.md#options
export interface OptParams {
    alias?: string | string[];
    array?: boolean;
    boolean?: boolean;
    choices?: string | string[] | number | number[];
    config?: boolean;
    conflicts?: string | string[];
    count?: boolean;
    default?: any;
    defaultDescription?: string;
    demandOption?: boolean | string;
    deprecated?: boolean | string;
    description?: string;
    global?: boolean;
    group?: string;
    implies?: string | string[];
    nargs?: number;
    normalize?: boolean;
    number?: boolean;
    requiresArg?: boolean;
    skipValidation?: boolean;
    string?: boolean;
    type?: 'array' | 'boolean' | 'count' | 'number' | 'string';
}
