(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray= planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsBreaks = planetsArray.join('<br>');
    console.log(planetsBreaks);
        // document.getElementById("html-go-here").innerHTML = planetsBreaks

    let planetsUl = '<ul><li>${planetsArray.join("</li><li>")}</li></ul>';
    // document.getElementById("html-go-here").innerHTML = planetsUl;

    // console.log(planetsArray);
    // let openTag = '<ul>';
    // let closeTag = '</ul>';
    //
    // let planetList = '';
    // for (let i = 0; i <= planetsArray.length; i++) {
    //     planetList += `<li>${planetsArray[i]}</li>`;
    // }
    // let finalPlanetList = `${openTag}${planetList}${closeTag}`;
    // console.log(finalPlanetList);
})();