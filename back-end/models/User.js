module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true 
    },
    cpf: { 
      type: DataTypes.STRING(11),
      unique: true,
      allowNull: false 
    },
    uf: { 
      type: DataTypes.STRING(2),
      allowNull: false 
    },
    dataNascimento: { 
      type: DataTypes.DATEONLY,
      allowNull: false 
    },
    valorEmprestimo: { 
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    valorPagoPorMes: { 
      type: DataTypes.INTEGER,
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
      field: 'created_at'
    }
  }, {
    tableName: 'Users',
    timestamps: true
  });

  User.associate = function(models) {
    User.hasMany(models.Lending, { foreignKey: 'user_id' });
  };

  return User;
};