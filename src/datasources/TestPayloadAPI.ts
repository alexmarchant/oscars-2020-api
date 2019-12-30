import { DataSource, DataSourceConfig } from 'apollo-datasource'
import TestPayload from '../models/TestPayload'

export default class TestPayloadAPI extends DataSource {
  context!: {}

  constructor() {
    super()
  }

  initialize(config: DataSourceConfig<{}>): void {
    this.context = config.context
  }

  async getFirst(): Promise<TestPayload> {
    return TestPayload.findOne()
  }
}
