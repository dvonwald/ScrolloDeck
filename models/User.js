const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/index");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        console.log("beforeCreate function");
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log(newUserData);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "User",
  }
);
module.exports = User;
