function LiveFinder(){
    //Big Thanks to Komali for the API Search Code
    //https://github.com/PrinceKomali
    
    let ChannelID = "UC7C948AM_7cNIORd22Rr_SQ";
    
    let key = `AIzaSyBtM74JgizdgwXMcf0mjoVA8AvsNWg8VZs`;
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(xhr.responseText);
            if(result.items.length > 0) {
                window.location.replace(`https://www.youtube.com/live_chat?v=${result.items[0].id.videoId}`);
            } 
            else {
                console.log("No livestream found :(");
            }
        }
    };
    xhr.open("GET", `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${ChannelID}&type=video&eventType=live&key=${key}`, true);
    xhr.send();
}

setInterval(LiveFinder, 30000);