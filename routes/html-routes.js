var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/characters", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/start", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

  };