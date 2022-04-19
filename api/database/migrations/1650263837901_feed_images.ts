import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FeedImages extends BaseSchema {
  protected tableName = 'feed_images'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.integer('feed_id').unsigned().notNullable().references('id').inTable('feeds').onDelete('CASCADE')
      table.string('feed_image_path').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
