module.exports = {
  getIndex: (req, res) => {
    console.log("home");
    res.render("todos.ejs");
  },
  getListings:(req,res)=>{
    res.render("listings.ejs")
  }
};
