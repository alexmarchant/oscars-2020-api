import { User, Nominee } from '../db'
import Dataloader from 'dataloader'

export interface Context {
  user?: User
  categoryNomineesLoader: Dataloader<number, Nominee[]>
}
