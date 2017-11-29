 function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

        // $(document).ready(function(){
        //     var maxHeight = 0;
        //     var $titles = $('.hero-header');
        //
        //     //Find the biggest div
        //     _.each($titles,function(title_div){
        //         var $title_div = $(title_div);
        //
        //         var height = parseInt($title_div.css('height') || 0);
        //         if (height>maxHeight) maxHeight=height;
        //     });
        //
        //     //Reset the div sizes to match
        //     _.each($titles,function(title_div){
        //         var $title_div = $(title_div);
        //
        //         //Even out the height of everything
        //         $title_div.css({height:maxHeight});
        //     });
 var page_background_map;

    $('#background_map').height($(window).height());

    var lat = getRandomInRange(24, 50, 3);
    var lng = getRandomInRange(-125, -67, 3);
    //var zoom = parseInt(getRandomInRange(3, 10, 0));

    var map = L.map('background_map', {zoomControl: false})
        .setView([lat, lng], 7);

    var osmAttr = '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
        L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);


    map.touchZoom.enabled();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    $(".leaflet-control-zoom").css("visibility", "hidden");
    $(".leaflet-control-container").css("visibility", "hidden");
    map._onResize();

    setTimeout(function () {
        panToNewLatLng(lat, lng, map);
    }, 1000);

    page_background_map = map;

    function panToNewLatLng(lat, lng, map) {
        var newLat = lat + getRandomInRange(-1, 1, 3);
        var newLng = lng + getRandomInRange(-1, 1, 3);

        map.panTo([newLat, newLng], {animate: true, duration: 15.0});
        setTimeout(function () {
            panToNewLatLng(newLat, newLng, map);
        }, 15000);

    }
