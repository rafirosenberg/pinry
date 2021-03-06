/**
 * Helpers for Pinry
 * Descrip: A hodgepodge of useful things to help clean up Pinry's JavaScript.
 * Authors: Pinry Contributors
 * Updated: Feb 26th, 2013
 * Require: jQuery
 */


function renderTemplate(templateId, context) {
    var template = Handlebars.compile($(templateId).html());
    return template(context);
}


function cleanTags(tags) {
    if (typeof tags === 'string' && tags.length > 0) {
        tags = tags.split(/[\s,]+/);
        for (var i in tags) {
            tags[i] = tags[i].trim();
        }
    } else {
        return [];
    }
    return tags;
}


function getImageData(imageId) {
    var apiUrl = '/api/v1/image/'+imageId+'/?format=json';
    return $.get(apiUrl);
}


function getPinData(pinId) {
    var apiUrl = '/api/v1/pin/'+pinId+'/?format=json';
    return $.get(apiUrl);
}


function deletePinData(pinId) {
    var apiUrl = '/api/v1/pin/'+pinId+'/?format=json';
    return $.ajax(apiUrl, {
        type: 'DELETE'
    });
}

function postPinData(data) {
    return $.ajax({
        type: "post",
        url: "/api/v1/pin/",
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
}


function getUrlParameter(name) {
    var decode = decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
    if (decode == 'null') return null;
    else return decode;
}

   /*Function youtubeLinkParser parses youtube link for Video ID*/
function youtubeLinkParser(youtubeUrl) {
    if (youtubeUrl.indexOf("youtube") != -1 ){
    video_id = youtubeUrl.split("v=")[1];
    ampersand_pos = video_id.indexOf("&");
        if (ampersand_pos != -1) {
            video_id = video_id.substring(0, ampersand_pos)
        }
    return video_id
    }
    else return null;
}


/*function youtubeit(youtubeid) {
    var urld = '"http://www.youtube.com/embed/' + youtubeid + '?autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer"';
    return urld;
}*/
