import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username',255).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('first_name',255).nullable()
      table.string('last_name',255).nullable()
      table.enu('gender',['Male','Female','Other']).notNullable()
      table.string('remember_me_token').nullable()
      table.bigInteger('forgot_code').notNullable()
      table.string('is_banned',50).notNullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true }).notNullable()
      // table.timestamp('updated_at', { useTz: true}).notNullable().defaultTo(this.now())
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
