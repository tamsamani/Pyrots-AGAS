import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function getAll(model, options) {
  return await model.findMany();
}

export async function createModel(model, modelData, options) {
  return await model.create({ data: modelData });
}

export class PrismaModel {

  prisma = prisma;
  model = this.prisma[this.name];

  constructor(public name: string, public queries: Record<string, (userModel, options) => Promise<unknown>> = {}){
  }

  async all (options) {

    const callback = this.queries.all || getAll;

    return await this.query(callback, options);
  }

  async create(modelData, options) {

    const callback = this.queries.create || createModel;

    return await this.query(callback, modelData, options)
  }

  async query(callback, ...args) {
    try {
      return await callback(this.prisma[this.name], ...args);
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

}