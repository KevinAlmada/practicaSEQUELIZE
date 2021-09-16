const db = require("../database/models")


module.exports = {
    list: (req,res) =>{
        db.Movies.findAll()
            .then((resultado)=>{
                res.render("moviesList",{
                    movies:resultado
                })
            })
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id)
        .then((resultado)=>{
            res.render("moviesDetail",{
                movie:resultado
            })
        })  
    },
    new:(req,res)=>{
        db.Movies.findAll({
            order:[["releaseDate","DESC"]]
            },)
            .then((resultado)=>{
                res.render("newestMovies",{
                    movies:resultado
                }) 
            })
    },
    recomended:(req,res)=>{
        db.Movies.findAll({
            order:[["rating","DESC"]],
            limit:5
        })
        .then((resultado)=>{
            res.render("recommendedMovies",{
                movies:resultado
            })  
        })
    }
}