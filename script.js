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
  document.getElementById('des').hidden = true;

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

} else if (selectedGender == "Nonbinary"){
  document.getElementById("Black").src="Assets/brianmichael.jpg";
  document.getElementById("Latino").src="Assets/danielavega.jpg";
  document.getElementById("Asian").src="Assets/ianalexander.jpg";

} else (selectedGender == "Female")
document.getElementById("Black").src="Assets/aVQka2S9_400x400.jpg";
document.getElementById("Latino").src="Assets/America-Ferrera.jpg";
document.getElementById("Asian").src="Assets/constancewu.jpg";
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
      document.getElementById('output-rec').innerHTML = "Based off your choices: Almost Christmas is the best movie for you. ";
    document.getElementById('output-description').innerHTML = "Finding this movie was pretty easy for me to find because it popped in my head when we were looking for comedy movies with black lead actors and actresses. I assumed that because it focused on the the family members and each family had their own story throughout the movie. In the beginning of the research process, I didn't have a clear definition of what leads meant in movies because I thought it were main characters throughout the movie, not just one main-main character who influenced everyone else. - MR";


    //so what?
  } else if (selectedGenre === "Comedy" && selectedGender === "Female" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/101646.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Girls Trip";
    document.getElementById('output-description').innerHTML = "Based off your choices Girls Trip is the best movie for you. <br> <br>Girls Trip was one of the first movies we put in here where it's comedy and main characters are all female and black. In comparison to finding other movies that have non-black leads, it was very difficult to find asian and latinix leads in comedy because the ones we thought were leads in comedies were sidekicks to the main character and came from stereotypical tropes that Hollywood has been using for a very long time. - MR";

  } else if (selectedGenre === "Comedy" && selectedGender === "Male" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/instructionsNotIncluded.jpeg";
    document.getElementById('output-title').innerHTML = "Your Remix: Instructions Not Included";
    document.getElementById('output-description').innerHTML = " Based off your choices Instructions Not Included is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Comedy" && selectedGender === "Female" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/curves.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Real Women Have Curves ";
    document.getElementById('output-description').innerHTML = "Based off your choices Real Women Have Curves is the best movie for you. <br> <br>I am very, very frustrated that there are no comedy movies with a latina leads. Like why, even when I do find a movie with a Latina lead it's from another country or from a different time period. update: I finally found a latina comedy movie which also has drama, but I'm actually proud to find this movie because I remember reading about it online and how it tackles cultural norms and body issues as well in the latina community. Before finding this movie, my teammates and I brainstorm movies we assumed had latina leads but when we came to researching them, we found out that the majority of the actresses are sidekicks and come from stereotypical tropes. Such as being the wife of a drug lord or any thing related to drugs or crime.   - MR";

  } else if (selectedGenre === "Comedy" && selectedGender === "Male" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/kungFuHustle.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Kung Fu Hustle ";
    document.getElementById('output-description').innerHTML = "Based off your choices Kung Fu Hustle is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";

  } else if (selectedGenre === "Comedy" && selectedGender === "Female" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/Catfightjpg.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Catfight ";
    document.getElementById('output-description').innerHTML = "Based off your choices Catfight is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";




  } else if (selectedGenre === "Action/Drama" && selectedGender === "Male" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/black-panther-tickets.jpeg";
    document.getElementById('output-title').innerHTML = "Your Remix: Black Panther";
    document.getElementById('output-description').innerHTML = " Based off your choices Black Panther is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";

  } else if (selectedGenre === "Action/Drama" && selectedGender === "Female" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/proudmary.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Proud Mary";
    document.getElementById('output-description').innerHTML = " Based off your choices Proud Mary is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Male" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/sicario.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Sicario";
    document.getElementById('output-description').innerHTML = " Based off your choices Sicario is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Female" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/Columbiana.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Columbiana";
    document.getElementById('output-description').innerHTML = " Based off your choices Columbiana is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Male" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/The-Foreigner-2017-movie-poster.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: The Foreigner";
    document.getElementById('output-description').innerHTML = " Based off your choices The Foreigner is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Action/Drama" && selectedGender === "Female" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/okja.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Okja";
    document.getElementById('output-description').innerHTML = " Based off your choices Okja is the best movie for you. <br> <br>It's frustrating that we can't find any asian women leading in action movies in the US. However, after a few days of non-stop researching an asian woman in an action film, I tried once again and found an article called, Dear LA Times Here Are 5 Asian Female Lead Actresses of 2017, and found a small list of lead asian female in action movies. This article both frustrated and excited me because I finally found a movie with a female lead in an action movie that was very beautifully written and its messsage about upending of the livestock industry. But it frustrated me because it took me such a long time to find a movie that didn't have female leads from the US and the lack of movies that represent asian women in Hollywood movies. - MR";





  } else if (selectedGenre === "Romance" && selectedGender === "Male" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/thinklikeaman.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Think Like A Man ";
    document.getElementById('output-description').innerHTML = " Based off your choices Think Like A Man is the best movie for you.<br> <br> Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Female" && selectedRace === "Black") {
    document.getElementById('output-image').src = "Assets/beyondthelights.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Beyond The Lights ";
    document.getElementById('output-description').innerHTML = " Based off your choices Beyond The Lights is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Male" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/dirtydancing.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Dirty Dancing: Havana Nights ";
    document.getElementById('output-description').innerHTML = " Based off your choices Dirty Dancing: Havana Nights is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Female" && selectedRace === "Latino") {
    document.getElementById('output-image').src = "Assets/overherdeadbody.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Over Her Deadbody ";
    document.getElementById('output-description').innerHTML = " Based off your choices Over Her Deadbody is the best movie for you. <br> <br>Finding a romance movie with a latina lead was very difficult to find. However, this was one of (and only, in my opinion) latina lead who leads in a romantic movie yet, the latina lead is dead in this movie and appears as a ghost throughout the film. - MR";


  } else if (selectedGenre === "Romance" && selectedGender === "Male" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/shanghaicalling.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Shanghai Calling ";
    document.getElementById('output-description').innerHTML = " Based off your choices Shanghai Calling is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


  } else if (selectedGenre === "Romance" && selectedGender === "Female" && selectedRace === "Asian") {
    document.getElementById('output-image').src = "Assets/MississippiMasala.jpg";
    document.getElementById('output-title').innerHTML = "Your Remix: Mississippi Masala ";
    document.getElementById('output-description').innerHTML = " Based off your choices Mississippi Masala is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";


} else if (selectedGenre === "Action/Drama" && selectedGender === "Nonbinary" && selectedRace === "Latino") {
  document.getElementById('output-image').src = "Assets/gunhillroad.jpg";
  document.getElementById('output-title').innerHTML = "Your Remix: Gun Hill Road";
  document.getElementById('output-description').innerHTML = " Based off your choices Gun Hill Road is the best movie for you.<br> <br> Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";

} else if (selectedGenre === "Comedy" && selectedGender === "Nonbinary" && selectedRace === "Latino") {
document.getElementById('output-image').src = "Assets/tangerine.jpg";
document.getElementById('output-title').innerHTML = "Your Remix: Tangerine";
document.getElementById('output-description').innerHTML = " Based off your choices Tangerine is the best movie for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";

} else if (selectedGenre === "Comedy" && selectedGender === "Nonbinary" && selectedRace === "Black") {
document.getElementById('output-image').src = "Assets/tangerine.jpg";
document.getElementById('output-title').innerHTML = "Your Remix: Tangerine";
document.getElementById('output-description').innerHTML = " Based off your choices Tangerine is the best movie for you.<br> <br> Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";

} else if (selectedGenre === "Action/Drama" && selectedGender === "Nonbinary" && selectedRace === "Asian") {
  document.getElementById('output-image').src = "Assets/oa.jpg";
  document.getElementById('output-title').innerHTML = "Your Remix: The OA";
  document.getElementById('output-description').innerHTML = " Based off your choices The OA is the best TV show for you. <br> <br>Finding movies with a diverse lead was difficult, too difficult, even though diversity in film is important. Having a diverse cast can show minorities that they are important and when a movie comes out and the whole cast is white, it marginalizes minorities even more. Including characters/actors that are a part of the LGBTQ+ is also something  that many movies fail to add, in fact in the top 100 films from 2014, 2015, and 2016, only one of them had a speaking transgender character. We hope that making this website will help find movies for people who are a minority and want to watch a film with someone who looks like them. ";
}
}
