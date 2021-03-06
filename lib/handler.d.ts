import * as Swagger from 'swagger-schema-official';
import { ValidationResult, ITraceStep } from './result';
import { IValidatorConfig } from './configuration-interfaces/validator-config.d';
export { IValidatorConfig };
export * from './result';
export declare class Handler {
    private config;
    swaggerSpec: Promise<Swagger.Spec>;
    constructor(swaggerSpec: Swagger.Spec | string, config?: IValidatorConfig);
    validateModel(test: any, schema: string | Swagger.Schema, cb?: (err: string, result?: ValidationResult) => void, trace?: Array<ITraceStep>): Promise<ValidationResult>;
    private startValidation(test, schema, trace?);
}
