import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Feed from './Feed'

export default class FeedImage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public feedId: number

  @column()
  public feedImagePath: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   * DB Relationship
   */
  @belongsTo(()=> Feed,{
    localKey:'id'
  })
  public feed: BelongsTo<typeof Feed>
}
