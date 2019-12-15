function volumeHigher ()
  {
    var myVideo = document.querySelector("div.videoContent video");
    myVideo.volume=1;
  }
function volumeLower()
{
  var myVideo = document.querySelector("div.videoContent video");
  myVideo.volume=0.2;
}
function start() {
  var myVideo = document.querySelector("div.videoContent video");
  var checkSong = setInterval(nextSongStyle,500);
  myVideo.volume = 0.2;
  myVideo.onmouseover= volumeHigher;
  myVideo.onmouseout = volumeLower;
}
function nextSongStyle(){
  var myVideo = document.querySelector("div.videoContent video");
  var header = document.querySelector("section h1")
  var lyrics = document.querySelector("p.lyrics")
  var currentTime = myVideo.currentTime;
  var songName = header.textContent;
  var text = lyrics.textContent;
  console.log(text+" "+songName);
  console.log(currentTime);
  if (currentTime >= 388)
    {
      header.innerHTML = "There Is A Light That Never Goes Out";
      lyrics.innerHTML =
      "Take me out tonight\n"+
"Where there's music and there's people\n" +
"And they're young and alive\n" +
"Driving in your car\n" +
"I never never want to go home\n" +
"Because I  haven't got one\n" +
"Anymore\n\n" +

"Take me out tonight\n " +
"Because I want to see people and I\n " +
"Want to see life\n" +
"Driving in your car\n" +
"Oh, please don't drop me home\n" +
"Because it's not my home, it's their\n" +
"Home, and I'm welcome no more\n\n" +

"And if a double-decker bus\n" +
"Crashes into us\n" +
"To die by your side\n" +
"Is such a heavenly way to die\n" +
"And if a ten-ton truck\n" +
"Kills the both of us\n" +
"To die by your side\n" +
"Well, the pleasure - the privilege is mine\n\n" +

"Take me out tonight\n" +
"Take me anywhere, I don't care\n" +
"I don't care, I don't care\n" +
"And in the darkened underpass\n " +
"I thought oh God, my chance has come at last\n" +
"but then a strange fear gripped me and I\n" +
"Just couldn't ask\n\n" +

"Take me out tonight\n" +
"Oh, take me anywhere, I don't care\n" +
"I don't care, I don't care\n" +
"Driving in your car\n" +
"I never never want to go home\n" +
"Because I haven't got one, da...\n" +
"Oh, I haven't got one\n\n" +

"And if a double-decker bus\n" +
"Crashes into us\n" +
"To die by your side\n" +
"Is such a heavenly way to die\n" +
"And if a ten-ton truck\n" +
"Kills the both of us\n" +
"To die by your side\n "+
"Well, the pleasure - the privilege is mine\n\n"+

"Oh, there is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n "+
"There is a light and it never goes out\n";
      myVideo.style.borderColor = "rgb(62, 54, 162)";
    }
if (currentTime<388){
      header.innerHTML = songName;
      lyrics.textContent= text;
    }
}
window.onload=start;
