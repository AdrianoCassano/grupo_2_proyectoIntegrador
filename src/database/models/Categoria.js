module.exports = function(sequelize, dataTypes){

    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sillones:{
            type: dataTypes.STRING

        },
        sofas:{
            type: dataTypes.STRING

        },

        camas:{
            type: dataTypes.STRING
        },

        escritorios:{
            type: dataTypes.STRING

        },
        sillas:{
            type: dataTypes.STRING

        },
        bibliotecas:{
            type: dataTypes.STRING

        },
        mueblesTV:{
            type: dataTypes.STRING

        },
        roperos:{
            type: dataTypes.STRING

        },
        mesas:{
            type: dataTypes.STRING

        }



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