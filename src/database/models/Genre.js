module.exports = (sequelize,DataTypes) => {
    let alias = "Genres"

    let cols ={
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        createdAt:{
            type:DataTypes.DATE
        },
        updatedAt:{
            type:DataTypes.DATE
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        ranking:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            unique:true
        },
        active:{
            type:DataTypes.INTEGER(1),
            allowNull:false
        }
    }
    let config ={
        tablename : "genres"
    }

    const Genre = sequelize.define(alias,cols,config)

    return Genre
}