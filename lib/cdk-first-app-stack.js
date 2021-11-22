"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkFirstAppStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const dynamodb = require("@aws-cdk/aws-dynamodb");
const path = require("path");
// import * as sqs from '@aws-cdk/aws-sqs';
class CdkFirstAppStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // example resource
        // const queue = new sqs.Queue(this, 'CdkFirstAppQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        // Definir una tabla de Dynamodb
        const greetingsTable = new dynamodb.Table(this, "FreetingsTable", {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }
        });
        // Definir una lambda
        const saveHelloFunction = new lambda.Function(this, "SaveHelloFunction", {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'handler.saveHello',
            code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda')),
            environment: {
                GREETINGS_TABLE: greetingsTable.tableName
            }
        });
    }
}
exports.CdkFirstAppStack = CdkFirstAppStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWZpcnN0LWFwcC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNkay1maXJzdC1hcHAtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxrREFBa0Q7QUFDbEQsNkJBQTZCO0FBRzdCLDJDQUEyQztBQUUzQyxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzdDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNkNBQTZDO1FBRTdDLG1CQUFtQjtRQUNuQiwwREFBMEQ7UUFDMUQsaURBQWlEO1FBQ2pELE1BQU07UUFFTixnQ0FBZ0M7UUFDaEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNoRSxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtTQUNsRSxDQUFDLENBQUE7UUFFRixxQkFBcUI7UUFDckIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQ3ZFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUQsV0FBVyxFQUFFO2dCQUNYLGVBQWUsRUFBRSxjQUFjLENBQUMsU0FBUzthQUMxQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQTFCRCw0Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tICdAYXdzLWNkay9hd3MtZHluYW1vZGInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXknO1xuXG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnQGF3cy1jZGsvYXdzLXNxcyc7XG5cbmV4cG9ydCBjbGFzcyBDZGtGaXJzdEFwcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFRoZSBjb2RlIHRoYXQgZGVmaW5lcyB5b3VyIHN0YWNrIGdvZXMgaGVyZVxuXG4gICAgLy8gZXhhbXBsZSByZXNvdXJjZVxuICAgIC8vIGNvbnN0IHF1ZXVlID0gbmV3IHNxcy5RdWV1ZSh0aGlzLCAnQ2RrRmlyc3RBcHBRdWV1ZScsIHtcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXG4gICAgLy8gfSk7XG5cbiAgICAvLyBEZWZpbmlyIHVuYSB0YWJsYSBkZSBEeW5hbW9kYlxuICAgIGNvbnN0IGdyZWV0aW5nc1RhYmxlID0gbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsIFwiRnJlZXRpbmdzVGFibGVcIiwge1xuICAgICAgcGFydGl0aW9uS2V5OiB7IG5hbWU6ICdpZCcsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH1cbiAgICB9KVxuXG4gICAgLy8gRGVmaW5pciB1bmEgbGFtYmRhXG4gICAgY29uc3Qgc2F2ZUhlbGxvRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiU2F2ZUhlbGxvRnVuY3Rpb25cIiwge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgICBoYW5kbGVyOiAnaGFuZGxlci5zYXZlSGVsbG8nLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsYW1iZGEnKSksXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBHUkVFVElOR1NfVEFCTEU6IGdyZWV0aW5nc1RhYmxlLnRhYmxlTmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==