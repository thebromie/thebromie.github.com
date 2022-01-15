function LiveFinder(){
    //Big Thanks to Komali for the API Search Code
    //https://github.com/PrinceKomali
    let ChannelID = "UC7C948AM_7cNIORd22Rr_SQ";
    let key = "AIzaSyBtM74JgizdgwXMcf0mjoVA8AvsNWg8VZs";
    //"AIzaSyD3GqHtog__j_ef47-sF00-g-ZSvrkIMR4";
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let result = JSON.parse(xhr.responseText);
        if(result.items.length > 0) {
                document.getElementById("youtubeFrame").src = `https://www.youtube.com/live_chat?v=${result.items[0].id.videoId}&embed_domain=www.thebromie.com`;
        } else {
            document.getElementById("youtube").style.display = "none";
            document.getElementById("twitch").style.width = "100%";
            console.log("No livestream found :(");
        }
        }
    };
    xhr.open("GET", `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${ChannelID}&type=video&eventType=live&key=${key}`, true);
    xhr.send();
}

window.onload = function(){
    setInterval(LiveFinder(), 60000);
}