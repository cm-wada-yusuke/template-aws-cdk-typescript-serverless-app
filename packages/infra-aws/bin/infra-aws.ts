#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { greetingServiceApplicationStack } from '../lib/greeting-service-stack';

async function buildApp(): Promise<void> {
    const app = new cdk.App();

    // Application stack
    await greetingServiceApplicationStack(app, 'GreetingServiceStack');
}

buildApp();
