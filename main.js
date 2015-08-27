function showContent(id) {
    $('.subcontent').fadeOut('slow');

    setTimeout(function(){
        $(id).fadeIn('slow');
    }, 500);

    $('#byline').animate({
        'margin-top': 0,
    }, 'slow');
}

function hideContent() {
    $('.subcontent').fadeOut('slow');

    $('#byline').animate({
        'margin-top': 100,
    }, 'slow');
}
