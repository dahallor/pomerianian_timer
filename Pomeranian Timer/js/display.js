var CurrentTab = "Work";
var PausedTab;

class Tabs{
    constructor(){

    }

    RemoveHyperlinks(){
            console.log("Begin RemoveHyperlinks: " + CurrentTab);
            if(CurrentTab == "Work"){
                listener.WorkButton.innerHTML = "Work";
                listener.ShortButton.innerHTML = "";
                listener.LongButton.innerHTML = "";
            }
            else if(CurrentTab == "Short"){
                listener.WorkButton.innerHTML = "";
                listener.ShortButton.innerHTML = "Short Break";
                listener.LongButton.innerHTML = "";
            }
            else{
                listener.WorkButton.innerHTML = "";
                listener.ShortButton.innerHTML = "";
                listener.LongButton.innerHTML = "Long Break";
            }
            console.log("End RemoveHyperlinks: " + CurrentTab);
        };

        //TODO: figure out why it only displays work tab even though it knows the correct current tab
        
    RestoreHyperlinks(){
        listener.WorkButton.innerHTML = "Work";
        listener.ShortButton.innerHTML = "Short Break";
        listener.LongButton.innerHTML = "Long Break";
    
    };

    LaunchVideo(){
        console.log("Hello World");
        modal.classList.add('active')
        overlay.classList.add('active')
        //TODO: Create code to launch pop up
    };

    ExitModal(){
        modal.classList.remove('active')
        overlay.classList.remove('active') 
    };


}



