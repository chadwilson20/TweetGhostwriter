function writeTweet()
{
  var intro = ["We must let go of the life we have planned",
  "Your work is going to fill a large part of your life",
  "I can't change the direction of the wind", "Perfection is not attainable"];
  var body = ["but if we chase perfection", "but I can adjust my sails",
  "so as to accept the one", "and the only way to be truly satisfied",
  "we must never forget that the highest appreciation"];
  var end = ["we can reach our destiny", "is to chase your dreams"];
  var randIndex = [randomUpTo(intro.length - 1), randomUpTo(body.length - 1),
  randomUpTo(end.length - 1)];
  var sentence = intro[randIndex[0]] + " " + body[randIndex[1]] + " " + end[randIndex[2]];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
