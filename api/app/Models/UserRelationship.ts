import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserRelationship extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sourceId: number

  @column()
  public targetId: number

  @column()
  public status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
