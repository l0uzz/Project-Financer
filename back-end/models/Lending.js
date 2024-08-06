module.exports = (sequelize, DataTypes) => {
  const Lending = sequelize.define('Lending', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saldoDevedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    juros: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    saldoDevedorAjustado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorParcela: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'updated_at'
    }
  }, {
    tableName: 'Lending',
    timestamps: true
  });

  Lending.associate = function (models) {
    Lending.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Lending;
};