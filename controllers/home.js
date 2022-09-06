module.exports = {
  getIndex: (req, res) => {
    console.log("home");
    res.render("home.ejs");
  },
  getListings:(req,res)=>{
    res.render("listings.ejs")
  }
};
