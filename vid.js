var vid = document.getElementById("vid")
document.getElementById("plbtn").onclick = function(){
    vid.play();
    var dt = new Date(vid.duration);
    //document.getElementById("total").innerHTML = dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds();
    
}

document.getElementById("stpbtn").onclick = function(){
    vid.pause();
}

document.getElementById("rewind").onclick = function(){
    if(vid.currentTime>=10 && vid.played)
     vid.currentTime -= 10;
    else vid.currentTime = 0;
}

document.getElementById("skip").onclick = function(){
    if(vid.currentTime<=vid.duration-10 && vid.played)
     vid.currentTime += 10;
    else vid.currentTime = vid.duration;
}

document.getElementById("fast").onclick = function(){
    if(vid.playbackRate<1) vid.playbackRate+=0.1;
    else if(vid.playbackRate<16){
    vid.playbackRate++;
        //document.getElementById('speed').value= parseInt(document.getElementById('speed').value)+1;
    }
}

document.getElementById("slow").onclick = function(){
    if(vid.playbackRate>1) vid.playbackRate--;
    else if(vid.playbackRate>0.1){
    vid.playbackRate-=0.1;
    //document.getElementById('speed').value= parseInt(document.getElementById('speed').value)-1;
    }
}

document.getElementById("Mute").onclick = function(){
     vid.volume = 0.0;
     snd.value = 0;
    
}

/*document.getElementById("begin").onclick = function(){
    vid.currentTime = 0;
}

document.getElementById("end").onclick = function(){
    vid.currentTime = Date(vid.duration);
}*/

vid.addEventListener("timeupdate",function(){
    document.getElementById("vidtime").value = vid.currentTime; 
    if(vid.ended) 
        document.getElementById("vidtime").value = document.getElementById("vidtime").max;
    // (parseFloat(vid.currentTime)/parseFloat(vid.duration)) * 100.0;
    
});

var snd = document.getElementById("sound");
snd.addEventListener("change",function(){
    vid.volume = parseFloat(snd.value)/10.0;
});

document.getElementById("vidtime").addEventListener("change",function(){
    vid.currentTime = this.value; 
});


vid.onloadedmetadata = function (){
    document.getElementById("vidtime").max = vid.duration-1;
    document.getElementById("total").innerHTML =vid.duration;

};

document.getElementById('speed').addEventListener('change',function()
{
    
    var spd = parseInt(document.getElementById('speed').value);
    console.log(spd);
    vid.playbackRate = spd;
});


 

