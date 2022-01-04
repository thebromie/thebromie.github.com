function PopUp(){
    let ChannelID = "UC7C948AM_7cNIORd22Rr_SQ";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    let result = JSON.parse(xhr.responseText);
    if(result.items.length > 0) {
            document.getElementById("youtubeFrame").src = `https://www.youtube.com/live_chat?v=${result.items[0].id.videoId}&embed_domain=www.thebromie.com`;
    } else {
        document.getElementById("youtube").style.display = "none";
        document.getElementById("twitch").style.width = "100%";
    }
    }
    };
    xhr.open("GET", `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${ChannelID}&type=video&eventType=live&key=AIzaSyB_6Y_WY4v5omvjLykCGow3sBsitd5eSJY`, true);
    xhr.send();
}

window.onload = function(){
    setTimeout(function(){
        PopUp();
    },0);
}