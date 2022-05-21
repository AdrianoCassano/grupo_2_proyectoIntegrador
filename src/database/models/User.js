module.exports = function(sequelize, dataTypes){

    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: dataTypes.STRING
        },
        lastName:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        country:{
            type: dataTypes.STRING
        },
        idType:{
            type: dataTypes.STRING
        },
        idDoc:{
            type: dataTypes.INTEGER
        },
        gender:{
            type: dataTypes.STRING
        },
        date:{
            type: dataTypes.DATE
        },
        phoneNumber:{
            type: dataTypes.INTEGER
        },
        userAvatar:{
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "users",
        timestamps: false


    }
    let User = sequelize.define(alias, cols, config);

   
         User.associate = function(models){
             User.belongsTo(models.UserCategory, {
                    as: "usercategory",
                    foreignKey: "categoryId"
                });

        User.belongsToMany(models.Product, {
            as: "products",
            through:"userProducts",
            foreignKey: "userId",
            otherKey:"productId",
            timestamps: false

        });
        
        User.hasMany(models.UserLog, {
            as: "UserLog",
            foreignKey: "userId"
        })
     
    }

    return User
    }