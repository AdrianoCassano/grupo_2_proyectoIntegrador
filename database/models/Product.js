module.exports = function(sequelize, dataTypes){

    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING

        },
        descripcion:{
            type: dataTypes.STRING

        },

        materiales:{
            type: dataTypes.STRING
        },

        cantidad:{
            type: dataTypes.INTEGER

        },
        precio:{
            type: dataTypes.INTEGER

        },

        dimensiones:{
            type: dataTypes.STRING
        },

        peso:{
            type: dataTypes.INTEGER
        },

        categoria:{
            type: dataTypes.STRING
        },

        productImg:{
            type: dataTypes.STRING
        } 
        

    }

    let config = {
        tableName: "products",
        timestamps: false


    }
    let Product = sequelize.define(alias, cols, config);

    
    Product.associate = function(models){
        Product.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoriaid"
        });
        Product.belongsToMany(models.User, {
            as: "users",
            through:"userproducts",
            foreignKey: "productid",
            otherKey:"userid",
            timestamps: false
        });
    }

    return Product
}