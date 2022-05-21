module.exports = function(sequelize, dataTypes){

    let alias = "UserProducts";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: dataTypes.INTEGER

        },
        productId:{
            type: dataTypes.INTEGER

        },


    }

    let config = {
        tableName: "userproducts",
        timestamps: false


    }
    let UserProducts = sequelize.define(alias, cols, config);

    
    UserProducts.associate = function(models){
    UserProducts.belongsTo(models.User, {
            as: "users",
            foreignKey: "Id",
            timestamps: false
        });
    }

    return UserProducts
}