function LiveFinder(){
    //Big Thanks to Komali for the API Search Code
    //https://github.com/PrinceKomali
    
    let ChannelID = "UC222Iabm0QfiovKTBjosMKw";
    
    let key = "AIzaSyD3GqHtog__j_ef47-sF00-g-ZSvrkIMR4";
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

LiveFinder();
setInterval(LiveFinder, 60000);