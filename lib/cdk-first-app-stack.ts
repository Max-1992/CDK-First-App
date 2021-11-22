import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as path from 'path';
import * as apigateway from '@aws-cdk/aws-apigateway';

// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkFirstAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkFirstAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // Definir una tabla de Dynamodb
    const greetingsTable = new dynamodb.Table(this, "FreetingsTable", {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }
    })

    // Definir una lambda
    const saveHelloFunction = new lambda.Function(this, "SaveHelloFunction", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'handler.saveHello',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda/saveHello')),
      environment: {
        GREETINGS_TABLE: greetingsTable.tableName
      }
    })

    
    const getHelloFunction = new lambda.Function(this, "GetHelloFunction", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'handler.getHello',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda/getHello')),
      environment: {
        GREETINGS_TABLE: greetingsTable.tableName
      }
    })
    

    // Crear una ApiGetaway e integrarla con una función lambda
    const helloApi = new apigateway.RestApi(this, "helloApi")

    helloApi.root
      .resourceForPath('v1/hello')
      .addMethod("POST", new apigateway.LambdaIntegration(saveHelloFunction))
    
    helloApi.root
      .resourceForPath('v1/hello')
      .addMethod("GET", new apigateway.LambdaIntegration(getHelloFunction))
    
    // Seterar permisos para ralizar acciones sobre la tabla de dynamodb
    greetingsTable.grantReadWriteData(saveHelloFunction)
    greetingsTable.grantReadData(getHelloFunction)
  }
}
