function PopUp(){
    let vidID = prompt("Enter the video id\nSelect the characters in single quotes:\nwww.youtube.com/watch?v=\'dQw4w9WgXcQ\'");
    document.getElementById("youtubeFrame").src = "https://www.youtube.com/live_chat?v=" + vidID + "&embed_domain=www.thebromie.com"
}

window.onload = function(){
    setTimeout(function(){
        PopUp();
    },0);
}