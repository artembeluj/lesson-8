const {Book} = require("../../models/book")

const getAll = async(req, res)=> {
    const {_id: owner} = req.user;
    const result = await Book.find({},"-createdAt -updatedAt")
    .populate("owner", "name email");
    res.json(result)
}


// const paginate = require('mongoose-paginate');

// const getAll = async (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const options = {
//         page,
//         limit,
//         sort: { author: 1 },
//     };

//     const result = await Book.paginate({}, options);
//     res.json(result);
// }

// const favorite = req.query.favorite;

//   const filter = {};

//   if (favorite !== undefined) {
//     filter.favorite = favorite;
//   }

//   const books = await Book.find(filter);
//     res.json(books);


module.exports = getAll;