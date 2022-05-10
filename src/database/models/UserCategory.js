module.exports = function(sequelize, dataTypes){

    let alias = "UserCategory";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "usercategory",
        timestamps: false


    }
    let UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function(models){
        UserCategory.hasMany(models.User, {
            as: "users",
            foreignKey: "categoryId"
        });
    }

    return UserCategory
}