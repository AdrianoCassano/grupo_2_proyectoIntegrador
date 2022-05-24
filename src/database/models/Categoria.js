module.exports = function(sequelize, dataTypes){

    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        categoriaImg:{
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "categorias",
        timestamps: false


    }
    let Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoriaId"
        });
    }

    return Categoria
}