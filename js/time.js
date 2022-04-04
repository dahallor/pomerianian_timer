class Timer{
    constructor(){
        this.WorkTime;
        this.ShortTime;
        this.LongTime;
        this.CurrentTime = this.WorkTime;
        this.CurrentPauseMin;
        this.CurrentPauseSec;
        this.interval;
        this.seconds = 0;
        this.status;
        this.manualInput = 0;

    }
    

    GetWorkTime(elements){
        elements.tagLine.innerHTML = "Be Good Boi. No Bork. No Run. Do Good Boi Work";
        elements.timer.innerHTML = this.WorkTime;
        this.CurrentTab = "Work";

        
    };
    
    GetShortTime(elements){
        console.log(elements)
        elements.tagLine.innerHTML = "Quick Break. Pee On Hydrant. Then Work";
        elements.timer.innerHTML = this.ShortTime;
        this.CurrentTab = "Short";

       
    };
    
    GetLongTime(elements){
        elements.tagLine.innerHTML = "Doggo Was Heckin' Good Boi. Time For Fetch!";
        elements.timer.innerHTML = this.LongTime;
        this.CurrentTab = "Long";

        
    };

    SetDefaults(){
        this.ShortTime = 5;
        this.LongTime = 15;
        this.seconds = 0;
        this.PausedTab = "N/A";
        this.status = "off";
        this.WorkTime = 25;

        elements.tagLine.innerHTML = "Be Good Boi. No Bork. No Run. Do Good Boi Work";
        elements.timer.innerHTML = this.WorkTime;
        this.CurrentTab = "Work";
    };

    SetTimer(){
        let TempTime = window.prompt("Please set time in minutes");
        TempTime = parseInt(TempTime);
        let returnType = errors.ErrorHandling(TempTime);
        if(returnType === 1){
            if (CurrentTab === "Work"){
                this.WorkTime = TempTime
                this.GetWorkTime();
            }
            if (CurrentTab === "Short"){
                this.ShortTime = TempTime
                this.GetShortTime();
            }
            if (CurrentTab === "Long"){
                this.LongTime = TempTime
                this.GetLongTime();
            }
        };
        this.manualInput = TempTime;
    
    };

    SetCurrentTime(){
        if(this.status !== "paused"){
            this.seconds = 0;
            if(CurrentTab === "Work"){
                this.CurrentTime = this.WorkTime;
            }
            else if(CurrentTab === "Short"){
                this.CurrentTime = this.ShortTime;
            }
            else{
                this.CurrentTime = this.LongTime;
            }
        }
        if(this.status === "paused"){
            this.CurrentTime = this.CurrentPauseMin;
            this.seconds = this.CurrentPauseSec;
        }
        if(this.manualInput !== 0){
            this.CurrentTime = this.manualInput;
            this.seconds = 0;
        }
    };

    SetPausedTime(){
        this.CurrentPauseMin = this.CurrentTime;
        this.CurrentPauseSec = this.seconds;
        this.PausedTab = this.CurrentTab;
        this.status = "paused";
    }


    UpdateTimer(elements, tabs, timer){
        elements.timer.innerHTML = `${CurrentTime} minutes : ${seconds} seconds`;
        if(this.CurrentTime !== 0 && this.seconds === 0){
            this.CurrentTime--;
            this.seconds = 60
        }
        if(this.CurrentTime === 0 && this.seconds === 0){
            elements.timer.innerHTML = "Done!"
            tabs.LaunchVideo();
            timer.StopTimer();
            this.status = "off";
        }
        this.seconds--;
    };

    StartTimer(timer, tabs){

        if(this.status === "paused" && this.PausedTab === this.CurrentTab){
            this.CurrentTime = this.CurrentPauseMin;
            this.seconds = this.CurrentPauseSec;
        }
        else {
            this.status = "on";
            timer.SetCurrentTime();
        };
        tabs.RemoveHyperlinks();
        this.interval = setInterval(timer.UpdateTimer, 1000);
        
    };
    
    
    
    StopTimer(){
        clearInterval(this.interval);
        timer.SetPausedTime();
        tabs.RestoreHyperlinks();

    
    };
    
    ResetTimer(){
        clearInterval(this.interval);
        if(manualInput == 0){
           timer.SetDefaults(); 
        }
        else{
            timer.SetCurrentTime();
        }
        tabs.RestoreHyperlinks();
        

    
    };

}






