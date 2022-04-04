var elements = new Elements();
var timer = new Timer();
var errors = new Errors();
var tabs = new Tabs();


timer.SetDefaults();

elements.WorkButton.addEventListener("click", e => {
    elements.tagLine.innerHTML = "Be Good Boi. No Bork. No Run. Do Good Boi Work";
    elements.timer.innerHTML = timer.WorkTime;
    timer.CurrentTab = "Work";
});
elements.ShortButton.addEventListener("click", e => {
    elements.tagLine.innerHTML = "Quick Break. Pee On Hydrant. Then Work";
    elements.timer.innerHTML = timer.ShortTime;
    timer.CurrentTab = "Short";
});
elements.LongButton.addEventListener("click", e => {
    elements.tagLine.innerHTML = "Doggo Was Heckin' Good Boi. Time For Fetch!";
    elements.timer.innerHTML = timer.LongTime;
    timer.CurrentTab = "Long";
});





elements.SetTime.addEventListener("click", e => {
    let TempTime = window.prompt("Please set time in minutes");
    TempTime = parseInt(TempTime);
    let returnType = errors.ErrorHandling(TempTime);
    if(returnType === 1){
        if (CurrentTab === "Work"){
            timer.WorkTime = TempTime
            timer.GetWorkTime();
        }
        if (CurrentTab === "Short"){
            timer.ShortTime = TempTime
            timer.GetShortTime();
        }
        if (CurrentTab === "Long"){
            timer.LongTime = TempTime
            timer.GetLongTime();
        }
    };
    timer.manualInput = TempTime;
});
elements.StartTime.addEventListener("click", e => {
    if(timer.status === "paused" && timer.PausedTab === timer.CurrentTab){
        timer.CurrentTime = timer.CurrentPauseMin;
        timer.seconds = timer.CurrentPauseSec;
    }
    else {
        timer.status = "on";
        timer.SetCurrentTime();
    };
    tabs.RemoveHyperlinks(elements)
    console.log(timer.status)
    setInterval(() => {
        console.log("timeout")
        
        elements.timer.innerHTML = `${timer.CurrentTime} minutes : ${timer.seconds} seconds`;
        if(timer.CurrentTime !== 0 && timer.seconds === 0){
            timer.CurrentTime--;
            timer.seconds = 60
        }
        if(timer.CurrentTime === 0 && timer.seconds === 0){
            elements.timer.innerHTML = "Done!"
            tabs.LaunchVideo();
            timer.StopTimer();
            timer.status = "done";
        }
        timer.seconds--;
        
        
        }, 1000);
        
    })

elements.StopTime.addEventListener("click", e => {
     
    clearInterval(timer.interval);
    timer.SetPausedTime();
    tabs.RestoreHyperlinks(elements);
});
elements.ResetTime.addEventListener("click", e => {
    clearInterval(timer.interval);
    if(timer.manualInput == 0){
        timer.SetDefaults(); 
    }
    else{
        timer.SetCurrentTime();
    }
    tabs.RestoreHyperlinks(elements);
});



elements.Open.addEventListener("click", e => {
    elements.modal.classList.add('active')
    elements.overlay.classList.add('active')
});
elements.Close.addEventListener("click", e => {
    elements.modal.classList.remove('active')
    elements.overlay.classList.remove('active')
})



/*TODO: create functions for new buttons
listener.SelectAlarm.addEventListener("click", SetAlarm())
/*
listener.ResetAlarm.addEventListener("click", )
*/

/*TODO:
-Embed Youtube Videos into Modal
-Get Select and Preview Buttons Working
-Troubleshoot timer
-Troubleshoot layout issues
*/