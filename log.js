
//***************************************************Log Fcns****************************************************************************** */


var fs = require("fs");
var moment = require('moment');
var liri=require("./liri.js");


function logWrap()
{
fs.appendFileSync("log.txt","^^^^^^^^^^^^^^^^^^^^"+"\n");    
fs.appendFileSync("log.txt","Log Date:"+"\n");
fs.appendFileSync("log.txt", new Date(moment())+"\n");
fs.appendFileSync("log.txt","^^^^^^^^^^^^^^^^^^^^"+"\n");
}



function logConcerts(concerts){
logWrap();
    for (var i = 0; i < concerts.length; i++) {
fs.appendFileSync("log.txt", "**********EVENT INFO*********\n");//Append in log.txt file
fs.appendFileSync("log.txt", i+"\n");
fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name+"\n");
fs.appendFileSync("log.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
fs.appendFileSync("log.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
fs.appendFileSync("log.txt", "*****************************"+"\n");
}
}

function logSongs(songs){
logWrap();
    for (var i = 0; i < songs.length; i++) {
      fs.appendFileSync("log.txt", "**********SONG INFO*********\n");
      fs.appendFileSync("log.txt", i +"\n");
      fs.appendFileSync("log.txt", "song name: " + songs[i].name +"\n");
      fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url +"\n");
      fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
      fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
      fs.appendFileSync("log.txt", "*****************************\n");    
    }

}

function logMovie(movies){
    logWrap();
          fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
      fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
      fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
      fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + liri.getRottenTomatoesRatingValue(movies) + "\n");
      fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
      fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
      fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
      fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
      fs.appendFileSync("log.txt", "*****************************\n");
}

module.exports={logConcerts,logSongs,logMovie};

