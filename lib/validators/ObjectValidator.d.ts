import * as Swagger from 'swagger-schema-official';
import { IValidatorConfig } from '../configuration-interfaces/validator-config.d';
import { ITraceStep, IValidationError } from '../result';
export declare function validateObject(test: any, schema: Swagger.Schema, spec: Swagger.Spec, config: IValidatorConfig, trace: Array<ITraceStep>): Promise<Array<IValidationError>>;
