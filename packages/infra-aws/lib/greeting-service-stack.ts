import * as cdk from '@aws-cdk/core';
import { Stack } from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { NODE_LAMBDA_LAYER_DIR, NODE_LAMBDA_SRC_DIR } from './processes/setup';

export async function greetingServiceApplicationStack(
    scope: cdk.Construct,
    id: string,
): Promise<Stack> {
    const stack = new cdk.Stack(scope, id, {
        stackName: 'application',
    });

    // node_modules を格納する LayerVersion
    const nodeModulesLayer = new lambda.LayerVersion(
        stack,
        'NodeModulesLayer',
        {
            layerVersionName: 'NodeModulesLayer',
            code: lambda.Code.fromAsset(NODE_LAMBDA_LAYER_DIR),
            description: 'Node.js modules layer',
            compatibleRuntimes: [lambda.Runtime.NODEJS_12_X],
        },
    );

    new lambda.Function(stack, 'getGreetingReply', {
        functionName: 'getGreetingReply-function',
        code: lambda.Code.fromAsset(NODE_LAMBDA_SRC_DIR),
        handler:
            'handlers/api-gw/greeting/api-gw-get-greeting-reply-handler.ts.handler',
        runtime: lambda.Runtime.NODEJS_12_X,
        layers: [nodeModulesLayer],
        environment: {
            REGION: cdk.Stack.of(stack).region,
        },
    });

    return stack;
}
