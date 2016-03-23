// ****** Request to GoodReads API ****** //


//*****GoogleMaps placeholder until GoodReads
//*****get their act together

$(function () {
    $("#btnShow").click(function () {
        $("#dialog").dialog({
            modal: true,
            resizable: true,
            title: "here i am",
            width: 600,
            height: 400,
            buttons: {
                Close: function () {
                    $(this).dialog('close');
                }
            },
            open: function () {
                var mapOptions = {
                    center: new google.maps.LatLng(38.2540, -85.7484),
                    zoom: 18,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map($("#dvMap")[0], mapOptions);
            }
        });
    });
});