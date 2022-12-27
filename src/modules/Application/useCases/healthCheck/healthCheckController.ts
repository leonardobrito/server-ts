import { Request, Response } from "express";
import { HealthCheckUseCase } from "./healthCheckUseCase";

export class HealthCheckController {
  async handle(_request: Request, response: Response) {
    const healthCheckUseCase = await new HealthCheckUseCase()
    const result = await healthCheckUseCase.execute()

    return response.json(result)
  }
}
