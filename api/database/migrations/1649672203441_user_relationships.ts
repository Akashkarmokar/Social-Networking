import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserRelationships extends BaseSchema {
  protected tableName = 'user_relationships'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('source_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.integer('target_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.enu('status',[0,1,2,3]).notNullable()
      /**
       *  0	Pending 
       *  1	Accepted 
       *  2	Declined 
       *  3	Blocked
       */
      table.integer('last_action_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
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
