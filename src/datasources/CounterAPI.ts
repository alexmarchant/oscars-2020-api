import { DataSource, DataSourceConfig } from 'apollo-datasource'
import Counter from '../models/Counter'
import { Context } from '../server'

export default class TestPayloadAPI extends DataSource {
  context!: Context

  constructor() {
    super()
  }

  initialize(config: DataSourceConfig<Context>): void {
    this.context = config.context
  }

  async getCount(): Promise<number> {
    const counter = await Counter.findOne()
    if (!counter) {
      throw new Error('No counter found')
    }
    return counter.count
  }

  async incrementCount(): Promise<number> {
    await Counter.increment({ count: 1 }, { where: { id: 1 } })
    return this.getCount()
  }
}
