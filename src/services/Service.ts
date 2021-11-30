import { Model } from 'mongoose';

export interface ArrayDataResponse {
  totalCount: number;
  data: any;
}

export class Service<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async getAll(query: Record<string, any>): Promise<ArrayDataResponse> {
    let { skip, limit, sortBy } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    sortBy = sortBy ? sortBy : { createdAt: -1 };

    delete query.skip;
    delete query.limit;
    delete query.sortBy;

    const data = await this.model.find().sort(sortBy).skip(skip).limit(limit);
    const totalCount = await this.model.countDocuments();
    return { totalCount, data };
  }

  async get(id: any): Promise<T> {
    const item = await this.model.findById(id);

    if (item) {
      return item;
    }

    throw new Error('Item not found');
  }

  async insert(data: any): Promise<T> {
    const item = await this.model.create(data);

    if (item) {
      return item;
    }

    throw new Error('Something went wrong');
  }

  async update(id: any, data: any): Promise<T> {
    const item = await this.model.findByIdAndUpdate(id, data, { new: true });

    if (item) {
      return item;
    }

    throw new Error('Item not found');
  }

  async delete(id: any): Promise<T> {
    const item = await this.model.findByIdAndDelete(id);

    if (item) {
      return item;
    }

    throw new Error('Item not found');
  }
}
