// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
// $('.collapsible').collapsible();

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBV2br3riGiSAsoqXDuLmFUiK3Hy9yLtVc",
  authDomain: "class-project-1-197300.firebaseapp.com",
  databaseURL: "https://class-project-1-197300.firebaseio.com",
  projectId: "class-project-1-197300",
  storageBucket: "",
  messagingSenderId: "777071123350"
};

firebase.initializeApp(config);

var database = firebase.database();

var teamsArray = [
  "15 Pittsburgh", "14 Wake Forest", "13 Georgia Tech", "12 Boston College", "11 Syracuse", 
  "10 Notre Dame", "9 Louisville", "8 Florida State", "7 Virginia Tech", "6 North Carolina", 
  "5 NC State", "4 Clemson", "3 Miami", "2 Duke", "1 Virginia"
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

var counter = [
  pittsburghCounter, wakeForestCounter, georgiaTechCounter, bostonCollegeCounter, syracuseCounter, 
  notreDameCounter, louisvilleCounter, floridaStateCounter, virginiaTechCounter, northCarolinaCounter, 
  nCStateCounter, clemsonCounter, miamiCounter, dukeCounter, virginiaCounter
];

$("#stats-summary").hide();

$(document).ready(function() {

  var gameIds = {
    game1: "97b9171e-465c-4a2f-b592-1ea65f17834f",
    game2: "2dfc96a1-6195-4253-8299-16607f5656a5",
    game3: "553b6bf3-5210-4801-b67e-536661cb20dc",
    game4: "5c6a2844-df68-43f5-89bf-ddb034418e9c",
    game5: "47da1ae2-fb9c-4072-8528-e0bfc5b9fd8a",
    game6: "ec322b3c-7a14-47f3-b710-c5b0f7eff94d",
    game7: "0a1b5c96-bdc5-44e2-882e-681ad9fa3d28",
    game8: "6d02683e-af72-4814-a233-6b206910d848",
    game9: "69e501f9-457a-42f6-812c-fff8b991f3e2",
    game10: "20b159ac-687a-40dd-aeca-f8b07c2a9d50",
    game11: "410c38cf-78d3-4292-8f0d-5c2fbd041caf",
    game12: "83703dd3-2874-451b-adb6-4bd1bd0fa62e",
    game13: "03df73fa-9c09-43ea-a874-3c6746558981",
    game14: "355ce426-981c-4893-a112-5b3df0017067"
  }

  // Scroll functions ---------------------------------------------------------
    $("#top-gif").click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
    });
    
    $(".matchup").click(function() {
      $('html, body').animate({
          scrollTop: $("#highlights").offset().top
      }, 1000);
    });
    
    $(".collapsible-header").click(function() {
      $('html, body').animate({
          scrollTop: $("#round-review").offset().top
      }, 1000);
    });
    
    $("#summary").click(function() {
      $('html, body').animate({
          scrollTop: $("#summary").offset().top
      }, 1000);
    });
  // --------------------------------------------------------------------------

  $(document).on("click", ".matchup", function(event) {
    // Matt's .matchup click JS -----------------------------------------------
      $("#initial-table").hide();
      $("#stats-summary").show();
      event.stopPropagation();
      event.preventDefault();

      $(".nextButton").empty(); 

      // I'll add a for loop to make this DRYer (Matt)
      
      if ($(this).attr("id") === "game1") {var gameId = gameIds.game1}
      else if ($(this).attr("id") === "game2") {var gameId = gameIds.game2}
      else if ($(this).attr("id") === "game3") {var gameId = gameIds.game3}
      else if ($(this).attr("id") === "game4") {var gameId = gameIds.game4}
      else if ($(this).attr("id") === "game5") {var gameId = gameIds.game5}
      else if ($(this).attr("id") === "game6") {var gameId = gameIds.game6}
      else if ($(this).attr("id") === "game7") {var gameId = gameIds.game7}
      else if ($(this).attr("id") === "game8") {var gameId = gameIds.game8}
      else if ($(this).attr("id") === "game9") {var gameId = gameIds.game9}
      else if ($(this).attr("id") === "game10") {var gameId = gameIds.game10}
      else if ($(this).attr("id") === "game11") {var gameId = gameIds.game11}
      else if ($(this).attr("id") === "game12") {var gameId = gameIds.game12}
      else if ($(this).attr("id") === "game13") {var gameId = gameIds.game13}
      else if ($(this).attr("id") === "game14") {var gameId = gameIds.game14}

      console.log(gameId);

      $.ajax({
        type: 'GET',

        url: "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/ncaamb/trial/v4/en/games/" + gameId + "/summary.json?api_key=mfzkxrk73tr7rr2553u5d6jq",
        
        contentType: 'text/plain',
      
        xhrFields: {withCredentials: false},
      
        headers: {
          Origin: "",
          'X-Requested-With': "",
        },
      
        success: function(response) {
          console.log(response);

          if (response.away.market === "Boston College") {var awayLogo = "bc.png"}
          else if (response.away.market === "Clemson") {var awayLogo = "clemson.png"}
          else if (response.away.market === "Georgia Tech") {var awayLogo = "gt.png"}
          else if (response.away.market === "Louisville") {var awayLogo = "louisville.png"}
          else if (response.away.market === "Notre Dame") {var awayLogo = "nd.png"}
          else if (response.away.market === "Pittsburgh") {var awayLogo = "pitt.png"}
          else if (response.away.market === "Syracuse") {var awayLogo = "syracuse.png"}
          else if (response.away.market === "North Carolina") {var awayLogo = "unc.png"}
          else if (response.away.market === "Wake Forest") {var awayLogo = "wf.png"}

          if (response.home.market === "Boston College") {var homeLogo = "bc.png"}
          else if (response.home.market === "Clemson") {var homeLogo = "clemson.png"}
          else if (response.home.market === "Duke") {var homeLogo = "duke.png"}
          else if (response.home.market === "Florida State") {var homeLogo = "fsu.png"}
          else if (response.home.market === "Miami (FL)") {
            var homeLogo = "miami.png";
            response.home.market = "Miami"
          }
          else if (response.home.market === "North Carolina State") {var homeLogo = "ncsu.png"}
          else if (response.home.market === "Notre Dame") {var homeLogo = "nd.png"}
          else if (response.home.market === "Syracuse") {var homeLogo = "syracuse.png"}
          else if (response.home.market === "North Carolina") {var homeLogo = "unc.png"}
          else if (response.home.market === "Virginia Tech") {var homeLogo = "va-tech.png"}
          else if (response.home.market === "Virginia") {var homeLogo = "va.png"}

          $("#away-score").empty().append(response.away.points);
          $("#home-score").empty().append(response.home.points);

          if (response.away.points > response.home.points) {
            $("#away-score").css("color", "#000000");
            $("#home-score").css("color", "#a5a6a7");
          }
          else if (response.home.points > response.away.points) {
            $("#home-score").css("color", "#000000");
            $("#away-score").css("color", "#a5a6a7");
          }

          $("#away-logo").empty().append(
            "<img class='team-logo' src='./assets/images/" + awayLogo + "'>"
          );
          $("#home-logo").empty().append(
            "<img class='team-logo' src='./assets/images/" + homeLogo + "'>"
          );

          $("#away-team").empty().append(
            response.away.market + " " + response.away.name
          );
          $("#home-team").empty().append(
            response.home.market + " " + response.home.name
          );

          $("#fg").empty().html("FG Made-Attempted");
          $("#fg-away").empty().html(
            response.away.statistics.field_goals_made + " - " + response.away.statistics.field_goals_att
          );
          $("#fg-home").empty().html(
            response.home.statistics.field_goals_made + " - " + response.home.statistics.field_goals_att
          );

          $("#fg-pct").empty().html("Field Goal %");
          $("#fg-pct-away").empty().html(response.away.statistics.field_goals_pct);
          $("#fg-pct-home").empty().html(response.home.statistics.field_goals_pct);

          $("#3pt").empty().html("3PT Made-Attempted");
          $("#3pt-away").empty().html(
            response.away.statistics.three_points_made + " - " + response.away.statistics.three_points_att
          );
          $("#3pt-home").empty().html(
            response.home.statistics.three_points_made + " - " + response.home.statistics.three_points_att
          );

          $("#3pt-pct").empty().html("Three Point %");
          $("#3pt-pct-away").empty().html(response.away.statistics.three_points_pct);
          $("#3pt-pct-home").empty().html(response.home.statistics.three_points_pct);

          $("#ft").empty().html("FT Made-Attempted");
          $("#ft-away").empty().html(
            response.away.statistics.free_throws_made + " - " + response.away.statistics.free_throws_att
          );
          $("#ft-home").empty().html(
            response.home.statistics.free_throws_made + " - " + response.home.statistics.free_throws_att
          );

          $("#ft-pct").empty().html("Free Throw %");
          $("#ft-pct-away").empty().html(response.away.statistics.free_throws_pct);
          $("#ft-pct-home").empty().html(response.home.statistics.free_throws_pct);

          $("#reb").empty().html("Rebounds");
          $("#reb-away").empty().html(response.away.statistics.rebounds);
          $("#reb-home").empty().html(response.home.statistics.rebounds);

          $("#ast").empty().html("Assists");
          $("#ast-away").empty().html(response.away.statistics.assists);
          $("#ast-home").empty().html(response.home.statistics.assists);

          $("#stl").empty().html("Steals");
          $("#stl-away").empty().html(response.away.statistics.steals);
          $("#stl-home").empty().html(response.home.statistics.steals);

          $("#blk").empty().html("Blocks");
          $("#blk-away").empty().html(response.away.statistics.blocks);
          $("#blk-home").empty().html(response.home.statistics.blocks);

          $("#to").empty().html("Total Turnovers");
          $("#to-away").empty().html(response.away.statistics.turnovers);
          $("#to-home").empty().html(response.home.statistics.turnovers);

          $("#pf").empty().html("Personal Fouls");
          $("#pf-away").empty().html(response.away.statistics.personal_fouls);
          $("#pf-home").empty().html(response.home.statistics.personal_fouls);

          $("#tf").empty().html("Technical Fouls");
          $("#tf-away").empty().html(response.away.statistics.player_tech_fouls);
          $("#tf-home").empty().html(response.home.statistics.player_tech_fouls);
        },
        error: function(error) {console.log(error);}
      });
    // </Matt> ----------------------------------------------------------------
    // Joe's .matchup click JS ------------------------------------------------
      event.stopPropagation();
      event.preventDefault();

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
        // youtubeIframe.attr("style", "width: 100%");

        youtubeIframe.appendTo(".iframe");

      });

      counter = [
        pittsburghCounter, wakeForestCounter, georgiaTechCounter, 
        bostonCollegeCounter, syracuseCounter, notreDameCounter, 
        louisvilleCounter, floridaStateCounter, virginiaTechCounter, 
        northCarolinaCounter, nCStateCounter, clemsonCounter, 
        miamiCounter, dukeCounter, virginiaCounter
      ];

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

      database.ref().set({

        Pittsburgh_Counter:  pittsburghCounter,
        Wake_Forest_Counter: wakeForestCounter,
        Georgia_Tech_Counter: georgiaTechCounter,
        Boston_College_Counter: bostonCollegeCounter,
        Syracuse_Counter: syracuseCounter,
        Notre_Dame_Counter: notreDameCounter,
        Louisville_Counter: louisvilleCounter,
        Florida_State_Counter: floridaStateCounter,
        Virginia_Tech_Counter: virginiaTechCounter,
        North_Carolina_Counter: northCarolinaCounter,
        NC_State_Counter: nCStateCounter,
        Clemson_Counter: clemsonCounter,
        Miami_Counter: miamiCounter,
        Duke_Counter: dukeCounter,
        Virginia_Counter: virginiaCounter

      });

    });
      
  database.ref().on("value", function(snapshot) {

        var sv = snapshot.val();
        pittsburghCounter = sv.Pittsburgh_Counter;
        wakeForestCounter = sv.Wake_Forest_Counter;
        georgiaTechCounter = sv.Georgia_Tech_Counter;
        bostonCollegeCounter = sv.Boston_College_Counter;
        syracuseCounter = sv.Syracuse_Counter;
        notreDameCounter = sv.Notre_Dame_Counter;
        louisvilleCounter = sv.Louisville_Counter;
        floridaStateCounter = sv.Florida_State_Counter;
        virginiaTechCounter = sv.Virginia_Tech_Counter;
        northCarolinaCounter = sv.North_Carolina_Counter;
        nCStateCounter = sv.NC_State_Counter;
        clemsonCounter = sv.Clemson_Counter;
        miamiCounter = sv.Miami_Counter;
        dukeCounter = sv.Duke_Counter;
        virginiaCounter = sv.Virginia_Counter;
    
        counter = [
          pittsburghCounter, wakeForestCounter, georgiaTechCounter, bostonCollegeCounter, syracuseCounter, 
          notreDameCounter, louisvilleCounter, floridaStateCounter, virginiaTechCounter, northCarolinaCounter, 
          nCStateCounter, clemsonCounter, miamiCounter, dukeCounter, virginiaCounter];
    
      
      database.ref().update({
        
        Pittsburgh_Counter:  pittsburghCounter,
        Wake_Forest_Counter: wakeForestCounter,
        Georgia_Tech_Counter: georgiaTechCounter,
        Boston_College_Counter: bostonCollegeCounter,
        Syracuse_Counter: syracuseCounter,
        Notre_Dame_Counter: notreDameCounter,
        Louisville_Counter: louisvilleCounter,
        Florida_State_Counter: floridaStateCounter,
        Virginia_Tech_Counter: virginiaTechCounter,
        North_Carolina_Counter: northCarolinaCounter,
        NC_State_Counter: nCStateCounter,
        Clemson_Counter: clemsonCounter,
        Miami_Counter: miamiCounter,
        Duke_Counter: dukeCounter,
        Virginia_Counter: virginiaCounter
        
      });

    });
    // </Joe> -----------------------------------------------------------------
 

  $(document).on("click", "#searchButton", function(event) {
    event.preventDefault();
  
    if ($("#searchInput").val() === "") {return}
  
    var team1 = $("#searchInput").val();
    $("#searchInput").val("");
    console.log(team1);
  
    $(".nextButton").empty();
    $(".iframe").empty();
  
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + 
          team1 + "2018+acc+tournament+highlights+basketball&key=AIzaSyBoONumSiI91o-ikt2hgig2YYFddwDkvdg";
  
    $.ajax({
  
      url: queryURL,
      method: "GET"
      
    }).then(function(response) {
  
      var id1 = response.items[0].id.videoId;
      // var id2 = response.items[1].id.videoId;
      // var id3 = response.items[2].id.videoId;
  
      console.log(id1);
      // console.log(id2);
      // console.log(id3);
  
      var youtubeIframe1 = $("<iframe width='560' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>")
      youtubeIframe1.attr("src", "https://www.youtube.com/embed/"+id1);
      // youtubeIframe1.attr("style", "width: 100%");
  
      youtubeIframe1.appendTo(".iframe");
  
      var nextButton = $("<button>");
      nextButton.appendTo(".nextButton");
      nextButton.html("Next Video");
      nextButton.attr("data",team1);
      nextButton.attr("id", "next-button");  
  
    });
  });
  
  var videoCounter = 0
  
  $(document.body).on("click", "#next-button", function() {
    event.preventDefault();
  
    videoCounter++;
  
    var team = $("#next-button").attr("data");
    console.log(team);
  
    $(".iframe").empty();
    $(".nextButton").empty();
  
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + 
        team + "2018+basketball&key=AIzaSyBoONumSiI91o-ikt2hgig2YYFddwDkvdg";
  
    $.ajax({
  
      url: queryURL,
      method: "GET"
    }).then(function(response) {
  
      var id = response.items[videoCounter].id.videoId;
    
      console.log(id);
  
      var youtubeIframe1 = $("<iframe width='560' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>")
      youtubeIframe1.attr("src", "https://www.youtube.com/embed/"+id);
      // youtubeIframe1.attr("style", "width: 100%");
  
      youtubeIframe1.appendTo(".iframe");
  
      var nextButton = $("<button>");
      // nextButton.appendTo(".iframe");
      nextButton.appendTo(".nextButton");
      nextButton.html("Next Video");
      nextButton.attr("data",team);
      nextButton.attr("id", "next-button");
  
    });
  
    if (videoCounter == 5) {
      videoCounter = 0;
    }
    
  });

});