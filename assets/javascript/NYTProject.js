$(document).ready(function () {

var searchSpecifics = [];

$("#searchGo").on("click", function(event) {

event.preventDefault();

var search, filterSearch, dateStart, dateEnd, sortBy, 
filterList, highlighter, pageResults, articleStats, filterStats;

        

        // store user input
        search = $("#searchTerms").val().trim();
        //dateStart = $("#dateStart").val().trim();
        //dateEnd = $("#dateEnd").val().trim();
        //pageResults = $("#pageResults").val().trim();
        //var movie = $("#highlighter").val().trim();
        //var movie = $("#articleStats").val().trim();
       
       //store search stuff to see if it works
        searchSpecifics.push(search, dateStart, dateEnd);


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({

  'api-key': "de8d86840824415490757a65af5f2436",
  'q': search,
  //'fq': filterSearch,
  //'begin_date': dateStart,
  //'end_date': dateEnd,
  //'sort': sortBy,
  //'fl': filterList,
  //'hl': highlighter,
  //'page': pageResults,
  //'facet_field': articleStats,
  //'facet_filter': filterStats

});


function jax(){
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {

      var searchResult = response.response.docs;
      console.log(searchResult);
      console.log(queryURL);

    for (i=0; i < searchResult.length; i++){

      var searchResultClean = searchResult[i];
      var searchResultExtraClean = searchResultClean.headline.main;
      console.log(searchResultExtraClean);

      $('#newsResult').append(searchResultExtraClean);
      
      

    };


      });
}
 jax();
});

})



