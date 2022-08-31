module.exports = {
  getListings: async (req, res)=>{
    res.render("listings.ejs");
  },
  postListings: async(req,res)=>{
    res.render("addListing.ejs")
  },
  searchListings: async(req,res)=>{
    res.render("searchListing.ejs")
  }
};
