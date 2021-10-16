function search() {
    // 1. Achterhaal de zoekterm. Je vindt de zoekterm via de id.
    // Hier jouw code
    var searchterm = document.getElementById('inputSearch').value;

    // 2. Check dat de zoekterm niet leeg is
    if (searchterm !== "") {
        // 3. Print de zoekterm via console.log, en lees de uitvoer in de console van de inspector.
        // Hier jouw code
        console.log('zoekterm = ' + searchterm);

        // 4. Haal de lijst met alle items op. Tip: gebruik document.getElementById()
        // Hier jouw code
        let themovies = document.getElementById('frontpage-movies')

        console.log("Lijst van filmtitels:");
        console.log(themovies);
        // Tussenstap 1: Log de movie titles, zodat je weet dat je ze gevonden hebt.
        // - je vindt de movie title via de .card-title class
        // - je vindt een lijst met classes via .querySelectorAll()
        // Hier jouw code

        const titles = themovies.querySelectorAll(".card-title");
        console.log(titles)
        Array.from(titles).forEach(function (title) {
            console.log(title.textContent);
        });


        // 5. Maak een lege lijst. Hierin gaan we de gefilterde items toevoegen
        let searchResults = [];

        console.log("Filter de lijst:");
        // 6. Loop door de lijst met items heen
        // en check voor ieder item of de titel daarvan overeenkomt met de zoekterm
        // - de movies zijn eigenlijk 'children' van het element met id #frontpage-movies
        // - met Array.forEach() loop je door de lijst heen
        Array.from(themovies.children).forEach(function (movie) {
            // 7. Haal de movie-title uit de film.
            // - gebruik querySelectorAll. Dit levert altijd een array
            const movietitle = movie.querySelectorAll(".card-title");

            // Hier jouw code uit stap 7
            //
            Array.from(movietitle).forEach(function (title) {
                console.log(title.textContent.toLowerCase());
                // Vergelijk de lowercase titel met de lowercase zoekterm
                let found = title.textContent.toLowerCase().includes(searchterm.toLowerCase());
                // Als er een match is, voeg dan de film toe aan de lijst van resultaten
                if (found) {
                    console.log("Yes, gevonden: " + title.textContent);
                    searchResults.push(movie);
                }
            });

        });

        // 8. Als we klaar zijn:
        // - print het aantal gevonden resultaten
        if (searchResults.length > 0) {
            console.log(`Er zijn ${searchResults.length} resultaten`);

            // - vervang de totale lijst van items (movies) door de gevonden lijst met resultaten
            // - gebruik hiervoor .innerHTML van de lijst van movies
            // - met .concat() voeg je het gevonden element telkens aan de zoekresultaten toe.

            // Hier jouw code uit stap 8
            themovies.innerHTML = ``;
            searchResults.forEach(function (movie) {
                themovies.innerHTML = themovies.innerHTML.concat('<div class="col-md-4">' + movie.innerHTML + "</div>");
            });


        } else {
            console.log("Helaas niet gevonden");
            themovies.innerHTML = `<p>Er zijn geen films die aan je zoekterm voldoen.</p>`;
        }

        // Maak het zoekveld leeg
        document.getElementById("inputSearch").value = "";
    }
}

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});		
  })(jQuery); 

  