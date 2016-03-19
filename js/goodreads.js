// ****** AJAX Request from GoodReads API ****** //


var url = "https://www.goodreads.com/book/isbn/0441172717?callback=myCallback&format=json&user_id=USER_ID";

$(document).ready(function() { 

    // ****** AJAX ****** //
    $.ajax({
      url: url,
      success: handleResult
    });

};