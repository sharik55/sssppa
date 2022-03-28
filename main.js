function ajax(urls){
    const http = new XMLHttpRequest();
    const url = urls;

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("content").innerHTML = this.responseText;
        }
    }

    http.open("GET",url);
    http.send();
}

document.getElementById("historia").addEventListener("click", function(){
    ajax("http://127.0.0.1:5500/pages/historia.html");
});

document.getElementById("video").addEventListener("click", function(){
    ajax("http://127.0.0.1:5500/pages/video.html");
});

document.getElementById("tipos").addEventListener("click", function(){
    ajax("http://127.0.0.1:5500/pages/tipos.html");
});


