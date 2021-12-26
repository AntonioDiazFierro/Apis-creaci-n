const db = require("../../database/models")
const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}
module.exports = {
    create: (req, res) => {
        const { title, rating, awards, release_date, length, genre_id } = req.body
        db.Movie.create({
                title,
                rating,
                awards,
                release_date,
                length,
                genre_id
            })
            .then((movie) => {
                res.status(200).json({
                    meta: {
                        endpoint: `${getUrl(req)}/${movie.id}`,
                        msg: "movie added successfully"
                    },
                    data: movie
                })
            }).catch(error => console.log(error))
    },
    delete: (req, res) => {

    }
};