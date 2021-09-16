module.exports = (sequelize,DataTypes) => {
    let alias = "Movies"

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
        title:{
            type:DataTypes.STRING(500),
            allowNull:false
        },
        rating:{
            type:DataTypes.DECIMAL.UNSIGNED,
            allowNull:false
        },
        awards:{
            type:DataTypes.INTEGER(10).UNSIGNED,
            allowNull:false
        },
        releaseDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        length:{
            type:DataTypes.INTEGER(10).UNSIGNED
        }
    }
    let config ={
        tablename : "genres"
    }

    const Movie = sequelize.define(alias,cols,config)

    return Movie
}