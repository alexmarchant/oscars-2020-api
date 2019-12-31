import { DataSource, DataSourceConfig } from 'apollo-datasource'
import TestPayload from '../models/TestPayload'
import { Context } from '../server'

export default class TestPayloadAPI extends DataSource {
  context!: Context

  constructor() {
    super()
  }

  initialize(config: DataSourceConfig<Context>): void {
    this.context = config.context
  }

  async getFirst(): Promise<TestPayload> {
    const payload = TestPayload.findOne()
    if (!payload) {
      throw new Error('No payload found')
    }
    return payload
  }
}
