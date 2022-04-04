class Tabs{
    constructor(){
        this.CurrentTab = "Work";
        this.PausedTab;

    }

    RemoveHyperlinks(elements){
            console.log("Begin RemoveHyperlinks: " + CurrentTab);
            if(CurrentTab === "Work"){
                elements.WorkButton.innerHTML = "Work";
                elements.ShortButton.innerHTML = "";
                elements.LongButton.innerHTML = "";
            }
            else if(CurrentTab === "Short"){
                elements.WorkButton.innerHTML = "";
                elements.ShortButton.innerHTML = "Short Break";
                elements.LongButton.innerHTML = "";
            }
            else{
                elements.WorkButton.innerHTML = "";
                elements.ShortButton.innerHTML = "";
                elements.LongButton.innerHTML = "Long Break";
            }
        };

        //TODO: figure out why it only displays work tab even though it knows the correct current tab
        
    RestoreHyperlinks(elements){
        elements.WorkButton.innerHTML = "Work";
        elements.ShortButton.innerHTML = "Short Break";
        elements.LongButton.innerHTML = "Long Break";
    
    };

    LaunchVideo(elements){
        elements.modal.classList.add('active')
        elements.overlay.classList.add('active')
        //TODO: Create code to launch pop up
    };

    ExitModal(elements){
        elements.modal.classList.remove('active')
        elements.overlay.classList.remove('active') 
    };


}



