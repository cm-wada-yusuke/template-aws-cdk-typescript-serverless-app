Serverless application (TypeScript) project template
===

[Yarn workspace](https://classic.yarnpkg.com/en/docs/cli/workspace) based AWS CDK and Lambda Function project template. 

* Node.js (12.x)


Getting Started
---

You can choose these branches.

* **master** : `hello-deployable-e2e-pipeline` + Stage deploy (dev, stg, prd) (WIP)
* hello-deploy-e2e-pipeline: `hello-deployable-e2e` + AWS CodePipeline cdk stack.
* hello-deploy-e2e: Minimal set. Hello world Lambda Function and cdk stack which deploy the function.  


Minimal set contains...
---

* yarn workspace `packages/app-node` : Lambda Function codes
* yarn workspace `packages/infra-aws` : AWS CDK codes
* eslint and prettier settings (`.eslintrc.js`, `.prettierrc.json`)


