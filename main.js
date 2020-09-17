
function readMore(name) {
    var dots = document.getElementById(`dots-${name}`);
    var moreText = document.getElementById(`more-${name}`);
    var btnText = document.getElementById(`myBtn-${name}`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Less";
        moreText.style.display = "inline";
    }
}






var video = document.createElement('video');
let videoBG = document.getElementById('vidDiv')
video.id = "videoBG"
video.muted = true;
video.autoplay = true;
video.loop = true;
video.playsinline = true;
let w;
let h;
let url;
function load() {
    if (window.outerHeight) {
        w = window.outerWidth;
        h = window.outerHeight;
    }
    else {
        w = document.body.clientWidth;
        h = document.body.clientHeight;
    }
    console.log(w, h)
    if (w > 767) {videoBG.appendChild(video);
        addSourceToVideo(video, 'src/chanmay.mp4', 'video/mp4');
       
       
        
        video.play()}
    else {url = 'https://images.unsplash.com/photo-1528606589862-7d68b7e3c95a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80'}
    document.getElementById('url').src = url;
}

function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;

    element.appendChild(source);
}




load()

$(function(){
    $(".container").html($(".corta").html()).show();
})
$('div.post-content').delegate("a", "click", function(e) {
    e.preventDefault();
    var div = $(this).closest('div');
    var points = div.find('.points');
    var complete = div.find('.completa').html();
    var corta = div.find('.corta').html();
    /*div.find('.corta').html(complete);
    div.find('.completa').html(corta);*/
    var $this = $(this);
    if ($this.text() == 'read more') {
        $(".container").hide().html($(".corta").html() +   $(".completa").html()).slideDown(500);
        $this.text("read less");
        points.hide();
    } else {
        $(".container").slideUp(500, function(){
            $(this).html($(".corta").html()).slideDown(100);        
            points.show();
        })
        $this.text("read more");

    }

});

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })