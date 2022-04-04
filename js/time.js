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


    SetCurrentTime(){
        if(this.status !== "paused"){
            this.seconds = 0;
            if(this.CurrentTab === "Work"){
                this.CurrentTime = this.WorkTime;
            }
            else if(this.CurrentTab === "Short"){
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





    
    

    


}






