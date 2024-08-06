const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      uf: DataTypes.STRING,
      dataNascimento: DataTypes.DATEONLY,
      valorEmprestimo: DataTypes.INTEGER,
      valorPagoPorMes: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}

module.exports = User


