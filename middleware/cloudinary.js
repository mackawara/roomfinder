const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({ 
  cloud_name: 'df94bonis', 
  api_key: '496535993249397', 
  api_secret: '2EN5RDxm_Xu7X4h7SkcEdgSozG8' 
});

module.exports = cloudinary;