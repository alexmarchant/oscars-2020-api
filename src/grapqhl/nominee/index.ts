import { Nominee } from '../../db'
import { Op } from 'sequelize'
import resolvers from './resolvers'
import schema from './schema'
import Dataloader from 'dataloader'

export default { resolvers, schema }

export function getCategoryNomineesLoader(): Dataloader<number, Nominee[]> {
  return new Dataloader(async ids => {
    const nominees = await Nominee.findAll({
      where: { categoryId: { [Op.in]: ids as number[] } },
    })
    return ids.map(id => nominees.filter(nominee => nominee.categoryId === id))
  })
}
