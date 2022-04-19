import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import FeedImage from './FeedImage'

export default class Feed extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public text: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  
  /**
   * DB Relation ships
   */
  @belongsTo(()=> User,{
    localKey:'id'
  })
  public user: BelongsTo<typeof User>

  @hasMany(()=> FeedImage,{
    foreignKey: 'feedId'
  })
  public images: HasMany<typeof FeedImage>
}
