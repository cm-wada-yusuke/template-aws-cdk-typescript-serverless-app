import * as path from 'path';

export const NODE_LAMBDA_SRC_DIR = path.join(
    process.cwd(),
    '../app-node/dist/src',
);
export const NODE_LAMBDA_LAYER_DIR = path.join(
    process.cwd(),
    '../app-node/dist/layer',
);
export const NODE_LAMBDA_LAYER_RUNTIME_DIR_NAME = `nodejs`;

const getModulesInstallDirName = (): string => {
    return path.join(NODE_LAMBDA_LAYER_DIR, NODE_LAMBDA_LAYER_RUNTIME_DIR_NAME);
};

/**
 * When you install package.json, the absolute path information of the installed environment is left in node_modules.
 * Also, AWS CodeBuild changes its working directory every time you build it.
 * Even if the library is the same, AWS CDK will decide to deploy a new Layer version.
 * LayerVersion of node_modules is deployed each time,
 * and all the Lambda Functions that depend on it are also deployed.
 * In order to increase deployment efficiency,
 * all environment-dependent elements (_where, _args) are removed.
 * This script assumes you will run it after the bundle is complete.
 */
export const removeUniquePathNpm = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const rm = require('removeNPMAbsolutePaths');
    rm(getModulesInstallDirName(), { force: true, fields: ['_where', '_args'] })
        .then((results: any) =>
            results.forEach((result: any) => {
                // Print only information about files that couldn't be processed
                if (!result.success) {
                    console.log(result.err.message);
                }
            }),
        )
        .catch((err: any) => console.log(err.message));
};
