Serverless application (TypeScript) project template
===

[yarn workspace](https://classic.yarnpkg.com/en/docs/cli/workspace) based AWS CDK and Lambda Function project template. 

* Node.js (12.x)


Getting Started
---

First, you should to switch aws account on your terminal app.

Using:

* https://github.com/remind101/assume-role
* https://github.com/cm-wada-yusuke/aws_swrole


and go deploy *greeting application*:

```bash
yarn deploy
```

You can invoke greeting function after deploy.

```bash
aws lambda invoke \
--payload '{"message": "Hi, how do you feel?"}' \
--function-name <greeting function arn> \
--cli-binary-format raw-in-base64-out \
out.txt
``` 


Example: 

```bash
aws lambda invoke \
--payload '{"message": "Hi, how do you feel?"}' \
--function-name 'arn:aws:lambda:ap-northeast-1:12345667890:function:getGreetingReply-function' \
--cli-binary-format raw-in-base64-out \
out.txt

less out.txt

{"reply":"Fine, and you? > Hi, how do you feel?"}⏎
``` 

Minimal set contains...
---

* yarn workspace `packages/app-node` : Lambda Function codes
* yarn workspace `packages/infra-aws` : AWS CDK codes
* eslint and prettier settings (`.eslintrc.js`, `.prettierrc.json`)

Branches status
---

You can choose these branches.

* **master** : `hello-deployable-e2e-pipeline` + Stage deploy (dev, stg, prd) (WIP)
* hello-deploy-e2e-pipeline: `hello-deployable-e2e` + AWS CodePipeline cdk stack.
* hello-deploy-e2e: Minimal set. Hello world Lambda Function and cdk stack which deploy greeting lambda function.  





