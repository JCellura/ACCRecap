// Initialize collapse button
$(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

var teamsArray = [
  "15 Pittsburgh", "14 Wake Forest", "13 Georgia Tech", "12 Boston College", "11 Syracuse", "10 Notre Dame", "9 Louisville", "8 Florida State", "7 Virginia Tech", "6 North Carolina","5 NC State","4 Clemson","3 Miami","2 Duke","1 Virginia"
];

var pittsburghCounter = 0;
var wakeForestCounter = 0;
var georgiaTechCounter = 0;
var pittsburghCounter = 0;
var bostonCollegeCounter = 0;
var syracuseCounter = 0;
var notreDameCounter = 0;
var louisvilleCounter = 0;
var floridaStateCounter = 0;
var virginiaTechCounter = 0;
var northCarolinaCounter = 0;
var nCStateCounter = 0;
var clemsonCounter = 0;
var miamiCounter = 0;
var dukeCounter = 0;
var virginiaCounter = 0;

counter = [pittsburghCounter, wakeForestCounter, georgiaTechCounter, bostonCollegeCounter, syracuseCounter, notreDameCounter, louisvilleCounter, floridaStateCounter, virginiaTechCounter, northCarolinaCounter, nCStateCounter, clemsonCounter, miamiCounter, dukeCounter, virginiaCounter]


$(document).ready(function() {


  $(".matchup").wrap("<a href='#highlights'></a>");

  $(document).on("click", "#team-1-btn", function() {

    var teamOneId = "52df1e19-b142-4a76-a439-ad68455d0581";

    $.ajax({
      type: 'GET',

      url: "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/ncaamb/trial/v4/en/seasons/2017/REG/teams/" + teamOneId + "/statistics.json?api_key=scsaqff3tjb2ak8xqubtjtgr",

      contentType: 'text/plain',
    
      xhrFields: {withCredentials: false},
    
      headers: {
        Origin: "",
        'X-Requested-With': "",
      },
    
      success: function(response) {
        console.log(response);

        $("#team-1-name").html(
          "<h3>" + response.market + " " + response.name + "</h3>"
        );

        $("#team-1-stats").html(
          "<h4>Offensive Stats</h4>" +
          "<p>Points / Game = " + response.own_record.average.points + "</p>" +
          "<p>Effective FG % = " + (response.own_record.total.field_goals_pct * 100) + "%</p>" +
          "<p>Assists / Game = " + response.own_record.average.assists + "</p>" +
          "<p>Total Rebounds / Game = " + response.own_record.average.rebounds + "</p>" +
          "<h4>Defensive Stats</h4>" +
          "<p>Opposition Points / Game = " + response.opponents.average.points + "</p>" +
          "<p>Opposition Effective FG % = " + (response.opponents.total.field_goals_pct * 100) + "%</p>" +
          "<p>Blocks / Game = " + response.own_record.average.blocks + "</p>" +
          "<p>Steals / Game = " + response.own_record.average.steals + "</p>"
        );
      },
    
      error: function(error) {console.log(error);}
    });

  // I'll add another ajax call in this click function to pull Team 1's record from another url (Matt)

  // "<p>" + response.rankings[0].wins + "-" + response.rankings[0].losses + "</p>"

  });


$(document).on("click", ".matchup", function(event) {
  event.stopPropagation();
  
  var team1 = $(this).find(".game-top").text();
  console.log(team1);
  $("#game-top").attr("id","game-top-"+team1);

  var team2 = $(this).find(".game-bottom").text();
  console.log(team2);
  $("#game-bottom").attr("id","game-bottom-"+team2);

  $(".iframe").empty();
    

  var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + 
        team1 + "+" + team2 + "+" + "2018+basketball&key=AIzaSyBoONumSiI91o-ikt2hgig2YYFddwDkvdg"

  $.ajax({

    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var id = response.items[0].id.videoId
    var queryURl = "https://www.googleapis.com/youtube/v3/videos?part=player&id=m_NOxaok0tE&key=AIzaSyAJoilv7hg1Nala1yMWZEHwZxgBYcXtE5Y"

    console.log(id);
    
    var youtubeIframe = $("<iframe width='560' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>")
    youtubeIframe.attr("src", "https://www.youtube.com/embed/"+id);
    youtubeIframe.attr("style", "width: 100%");

    youtubeIframe.appendTo(".iframe");

  });

  for (var i=0; i<teamsArray.length; i++) {
  if (team1 == teamsArray[i] || team2 == teamsArray[i]) {

    counter[i]++;

    console.log(counter);

    pittsburghCounter = counter[0];
    wakeForestCounter = counter[1];
    georgiaTechCounter = counter[2];
    bostonCollegeCounter = counter[3];
    syracuseCounter = counter[4];
    notreDameCounter = counter[5];
    louisvilleCounter = counter[6];
    floridaStateCounter = counter[7];
    virginiaTechCounter = counter[8];
    northCarolinaCounter = counter[9];
    nCStateCounter = counter[10];
    clemsonCounter = counter[11];
    miamiCounter = counter[12];
    dukeCounter = counter[13];
    virginiaCounter = counter[14];

  };
};
  
});

$(document).on("click", "#searchButton", function(event) {
  event.stopPropagation();

  var team1 = $("#searchInput").val();
  console.log(team1);

  $(".iframe").empty();

  var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + 
        team1 + "2018+basketball&key=AIzaSyBoONumSiI91o-ikt2hgig2YYFddwDkvdg"

  $.ajax({

    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var id1 = response.items[0].id.videoId;
    var id2 = response.items[1].id.videoId;
    var id3 = response.items[2].id.videoId;

    console.log(id1);
    console.log(id2);
    console.log(id3);

    var youtubeIframe1 = $("<iframe width='560' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>")
    youtubeIframe1.attr("src", "https://www.youtube.com/embed/"+id1);
    youtubeIframe1.attr("style", "width: 100%");

    var youtubeIframe2 = $("<iframe width='560' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>")
    youtubeIframe2.attr("src", "https://www.youtube.com/embed/"+id2);
    youtubeIframe2.attr("style", "width: 100%");

    var youtubeIframe3 = $("<iframe width='560' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>")
    youtubeIframe3.attr("src", "https://www.youtube.com/embed/"+id3);
    youtubeIframe3.attr("style", "width: 100%");

    youtubeIframe1.appendTo(".iframe");
    youtubeIframe2.appendTo(".iframe");
    youtubeIframe3.appendTo(".iframe");
  })

});

});