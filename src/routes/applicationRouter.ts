import { Router } from "express";
import { HealthCheckController } from "../modules/Application/useCases/healthCheck/healthCheckController";

const applicationRouter = Router();
const healthCheckController = new HealthCheckController()

applicationRouter.get('/', healthCheckController.handle)

export { applicationRouter };
