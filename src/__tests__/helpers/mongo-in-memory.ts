import { Connection, createConnection } from 'mongoose'

import { MongoMemoryServer } from 'mongodb-memory-server'

export class MongoInMemory {
  private constructor(
    private mongoServer: MongoMemoryServer,
    private mongoConnection: Connection
  ) {}

  public static async startServer(): Promise<MongoInMemory> {
    const mongoServer = await MongoMemoryServer.create()
    const mongoUri = mongoServer.getUri()
    const createdConnection = createConnection(mongoUri)

    process.env.MONGODB_URI = mongoUri

    return new MongoInMemory(mongoServer, createdConnection)
  }

  public async shutdown() {
    await this.mongoConnection.dropDatabase()
    await this.mongoConnection.close()
    await this.mongoServer.stop()
  }

  public async clearCollections() {
    const collections = this.mongoConnection.collections
    for (const key in collections) {
      const collection = collections[key]
      await collection.deleteMany({})
    }
  }
}
