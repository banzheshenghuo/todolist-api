import sequelize, { Sequelize } from 'sequelize'

export default sql => {
  return sql.define(
    'task',
    {
      id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: sequelize.STRING,
      update_time: sequelize.STRING,
      detail: sequelize.STRING,
      status: sequelize.INTEGER,
      label: sequelize.STRING,
      category: sequelize.STRING
    },
    {
      tableName: 'task',
      timestamps: false
    }
  )
}
