import { NextFunction, Request, Response } from 'express';
import { Service } from 'services/Service';

export class Controller<T> {
  protected service: Service<T>;

  constructor(service: Service<T>) {
    this.service = service;
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.getAll(req.query);
      return res.json({ success: true, data: response });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const response = await this.service.get(id);
      return res.json({ success: true, data: response });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  }

  async insert(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.insert(req.body);
      return res.json({ success: true, data: response });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const response = await this.service.update(id, req.body);
      return res.json({ success: true, data: response });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const response = await this.service.delete(id);
      return res.json({ success: true, data: response });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  }
}
