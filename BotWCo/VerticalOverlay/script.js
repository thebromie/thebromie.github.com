const key = "AIzaSyBtM74JgizdgwXMcf0mjoVA8AvsNWg8VZs";
    //"AIzaSyD3GqHtog__j_ef47-sF00-g-ZSvrkIMR4";
let ChannelID = //"UCSJ4gkVC6NrvII8umztf0Ow"; 
    "UC7C948AM_7cNIORd22Rr_SQ";

twitchFrame.onload = function(){EditTwitchChat();};

var LiveInterval = setInterval(LiveFinder, 60000);

function LiveFinder(){
    //Big Thanks to Komali for the API Search Code
    //https://github.com/PrinceKomali
    
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(xhr.responseText);
            if(result.items.length > 0) {
                document.getElementById("youtubeFrame").src = `https://www.youtube.com/live_chat?v=${result.items[0].id.videoId}&embed_domain=www.thebromie.com`;
                $('#youtube').show();
                document.getElementById("twitch").style.width = "100%";
                document.getElementById("twitch").style.height = "60%";
                clearInterval(LiveInterval);
                console.log("Livestream Found :)");
                EditYouTubeChat();
            } 
            else {
                $('#youtube').hide();
                document.getElementById("twitch").style.width = "100%";
                document.getElementById("twitch").style.height = "100%";
                console.log("No livestream found :(");
            }
        }
    };
    xhr.open("GET", `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${ChannelID}&type=video&eventType=live&key=${key}`, true);
    xhr.send();
}

function EditTwitchChat(){
    var cssLink = document.createElement("link");
    cssLink.href = "TwitchStyle.css";  
    cssLink.rel = "stylesheet";  
    cssLink.type = "text/css";  
    frames['twitchFrame'].document.body.appendChild(cssLink); 
}

function EditYouTubeChat(){
    var cssLink = document.createElement("link");
    cssLink.href = "YouTubeStyle.css";  
    cssLink.rel = "stylesheet";  
    cssLink.type = "text/css";  
    frames['youtubeFrame'].document.body.appendChild(cssLink); 
}