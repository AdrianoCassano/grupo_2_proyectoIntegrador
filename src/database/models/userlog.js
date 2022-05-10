
module.exports = (sequelize, dataTypes) => {
    let alias = 'UserLog';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        token: {
            type: dataTypes.STRING(200)
        }
    };
    let config = {
        tableName: 'userslog',
        timestamps: false
    };
    
    const UserLog = sequelize.define(alias, cols, config)

    UserLog.associate = (models)=> {
        UserLog.belongsTo(models.User, { 
            as: "User", 
            foreignKey: "userId"
        })
    }
    return UserLog;
}