$(document).ready(function () {

    $('#submit-btn').click(function (event) {
        event.preventDefault();


        // define variables, get the entry, and store it in var
        var city = $('#city-type').val();
        console.log(city);


        // test for acceptable city entries
        if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
            console.log('update with image of LA');
            //var imageUrl = ('images/la.jpg');
            //updateBG(imageUrl);
            $('body').css('background-image', 'url(images/la.jpg)');
            clearField();
        } else if (city === 'New York' || city === 'New York City' || city === 'NYC') {
            console.log('update with image of NYC');
            //var imageUrl = ('images/nyc.jpg');
            //updateBG(imageUrl);
            $('body').css('background-image', 'url(images/nyc.jpg)');
            clearField();
        } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
            //var imageUrl = ('images/sf.jpg');
            //updateBG(imageUrl);
            $('body').css('background-image', 'url(images/sf.jpg)');
            clearField();
        } else if (city === 'Austin' || city === 'ATX') {
            //var imageUrl = ('images/austin.jpg');
            //updateBG(imageUrl);
            $('body').css('background-image', 'url(images/austin.jpg)');
            clearField();
        } else if (city === 'Sydney' || city === 'SYD') {
            //var imageUrl = ('images/sydney.jpg');
            //updateBG(imageUrl);
            $('body').css('background-image', 'url(images/sydney.jpg)');
            clearField();
        } else clearField();
        return false;

        // clear unacceptable city input 
        function clearField() {
            console.log('Clear the field');
            $('#citytype').val('');
        };
        
        

        // update the background image with corresponding jpg 
        function updateBG() {
            console.log('update the bg');
            //console.log(imageUrl);
            $('body').css('background-image', 'url(imageUrl)');
            //$('body').css('background-image', 'url(images/nyc.jpg)');
        };

    });

});