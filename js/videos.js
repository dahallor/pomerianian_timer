

class Videos{
    constructor(){

    }

    SetVideo(input){
        if(input == "starWars"){
            document.getElementById("video").innerHTML(<iframe width="560" height="315" src="https://www.youtube.com/embed/y3PcelCeraw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
        };
    }

}