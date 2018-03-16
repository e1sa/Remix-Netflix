var selectedGenre = ""; //start empty
var selectedGender = ""; //start empty
var selectedRace = ""; //start empty

function refresh(){
    location.reload();
}

function setGenre(genreType) {
  selectedGenre = genreType; //assign to global store variable
  document.getElementById('genre-row').hidden = true; // hides genre row
  window.location.href = "#genre-row";
  //alert(selectedGenre);
  document.getElementById('gender-row').hidden = false;// shows gender row

}

function setGender(genderType) {
  selectedGender = genderType;
  //alert(selectedGender);
  document.getElementById('gender-row').hidden = true;
  window.location.href = "#race-row";
  document.getElementById('race-row').hidden = false;
  //if selectedGender = male, then img src = "assets/mbj"
  //else img src - " assets/viola."
if (selectedGender == "Male"){
  document.getElementById("Black").src="Assets/Micheal B Jordan.png";
  document.getElementById("Latino").src="Assets/Diego Luna.jpeg";
  document.getElementById("Asian").src="Assets/steven-yeun.jpg";

}

}

function setRace(raceType) {
  selectedRace = raceType;
  //alert(selectedRace);
  document.getElementById('race-row').hidden = true;
  window.location.href = "#results";
  processResults(selectedGenre, selectedGender, selectedRace);
}


function processResults(selectedGenre, selectedGender, selectedRace) {
  document.getElementById('results').hidden = false;

  if (selectedGenre === "Comedy" && selectedGender === "Male" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/almost christmas.png";
    document.getElementById('output-title').innerHTML = "Your Remix: Almost Christmas ";
    document.getElementById('output-description').innerHTML = "Based off your choices, Almost Christmas is the best movie for you";


    //so what?
  } else if (selectedGenre === "Comedy" && selectedGender === "Female" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/101646.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Girls Trip";
    document.getElementById('output-description').innerHTML = "Based off your choices Girls Trip is the best movie for you.";

  } else if (selectedGenre === "Comedy" && selectedGender === "Male" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/instructionsNotIncluded.jpeg";
    document.getElementById('output-title').innerHTML = "Your Remix: Instructions Not Included";
    document.getElementById('output-description').innerHTML = " Based off your choices Instructions Not Included is the best movie for you";


  } else if (selectedGenre === "Comedy" && selectedGender === "Female" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/curves.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Real Women Have Curves ";
    document.getElementById('output-description').innerHTML = "Based off your choices Real Women Have Curves is the best movie for you";

  } else if (selectedGenre === "Comedy" && selectedGender === "Male" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/kungFuHustle.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Kung Fu Hustle ";
    document.getElementById('output-description').innerHTML = "Based off your choices Kung Fu Hustle is the best movie for you";

  } else if (selectedGenre === "Comedy" && selectedGender === "Female" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/Catfightjpg.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Catfight ";
    document.getElementById('output-description').innerHTML = "Based off your choices Catfight is the best movie for you";




  } else if (selectedGenre === "Action/Drama" && selectedGender === "Male" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/black-panther-tickets.jpeg";
    document.getElementById('output-title').innerHTML = "Your Remix: Black Panther";
    document.getElementById('output-description').innerHTML = " Based off your choices Black Panther is the best movie for you. ";

  } else if (selectedGenre === "Action/Drama" && selectedGender === "Female" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/proudmary.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Proud Mary";
    document.getElementById('output-description').innerHTML = " Based off your choices Proud Mary is the best movie for you. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Male" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/sicario.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Sicario";
    document.getElementById('output-description').innerHTML = " Based off your choices Sicario is the best movie for you. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Female" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/Columbiana.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Columbiana";
    document.getElementById('output-description').innerHTML = " Based off your choices Columbiana is the best movie for you. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Male" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/The-Foreigner-2017-movie-poster.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: The Foreigner";
    document.getElementById('output-description').innerHTML = " Based off your choices The Foreigner is the best movie for you. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Female" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/okja.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Okja";
    document.getElementById('output-description').innerHTML = " Based off your choices Okja is the best movie for you. ";





  } else if (selectedGenre === "Romance" && selectedGender === "Male" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/Think like a man.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Think Like A Man ";
    document.getElementById('output-description').innerHTML = " Based off your choices Think Like A Man is the best movie for you. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Female" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/beyondthelights.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Beyond The Lights ";
    document.getElementById('output-description').innerHTML = " Based off your choices Beyond The Lights is the best movie for you. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Male" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/dirtydancing.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Dirty Dancing: Havana Nights ";
    document.getElementById('output-description').innerHTML = " Based off your choices Dirty Dancing: Havana Nights is the best movie for you. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Female" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/overherdeadbody.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Over Her Deadbody ";
    document.getElementById('output-description').innerHTML = " Based off your choices Over Her Deadbody is the best movie for you. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Male" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/shanghaicalling.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Shanghai Calling ";
    document.getElementById('output-description').innerHTML = " Based off your choices Shanghai Calling is the best movie for you. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Female" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/MississippiMasala.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Mississippi Masala ";
    document.getElementById('output-description').innerHTML = " Based off your choices Mississippi Masala is the best movie for you. ";


} else if (selectedGenre === "Action/Drama" && selectedGender === "Nonbinary" && selectedRace === "Latino") {
  document.getElementById('output-image').src = "Assets/gunhillroad.jpg";
  document.getElementById('output-title').innerHTML = "Your Remix: Gun Hill Road";
  document.getElementById('output-description').innerHTML = " Based off your choices Gun Hill Road is the best movie for you. ";

} else if (selectedGenre === "Comedy" && selectedGender === "Nonbinary" && selectedRace === "Latino" || selectedRace === "Black") {
document.getElementById('output-image').src = "Assets/tangerine.jpg";
document.getElementById('output-title').innerHTML = "Your Remix: Tangerine";
document.getElementById('output-description').innerHTML = " Based off your choices Tangerine is the best movie for you. ";

} else if (selectedGenre === "Action/Drama" && selectedGender === "Nonbinary" && selectedRace === "Asian") {
  document.getElementById('output-image').src = "Assets/oa.jpg";
  document.getElementById('output-title').innerHTML = "Your Remix: The OA";
  document.getElementById('output-description').innerHTML = " Based off your choices The OA is the best TV show for you. ";
}
}
