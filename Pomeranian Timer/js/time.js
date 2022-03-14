var WorkTime;
var ShortTime;
var LongTime;
var CurrentTime = WorkTime;
var CurrentPauseMin;
var CurrentPauseSec;
var Interval;
var seconds = 0;
const countdown = document.getElementById("timer");
var status;
var manualInput = 0;


class Timer{
    constructor(){

    }
    

    GetWorkTime(){
        document.getElementById("tag_line").innerHTML = "Be Good Boi. No Bork. No Run. Do Good Boi Work";
        document.getElementById("timer").innerHTML = WorkTime;
        CurrentTab = "Work";

        
    };
    
    GetShortTime(){
        document.getElementById("tag_line").innerHTML = "Quick Break. Pee On Hydrant. Then Work";
        document.getElementById("timer").innerHTML = ShortTime;
        CurrentTab = "Short";

       
    };
    
    GetLongTime(){
        document.getElementById("tag_line").innerHTML = "Doggo Was Heckin' Good Boi. Time For Fetch!";
        document.getElementById("timer").innerHTML = LongTime;
        CurrentTab = "Long";

        
    };

    SetDefaults(){
        WorkTime = 25;
        ShortTime = 5;
        LongTime = 15;
        seconds = 0;
        PausedTab = "N/A";
        status = "off";
    };

    SetTimer(){
        let TempTime = window.prompt("Please set time in minutes");
        TempTime = parseInt(TempTime);
        let returnType = errors.ErrorHandling(TempTime);
        if(returnType == 1){
            if (CurrentTab == "Work"){
                WorkTime = TempTime
                timer.GetWorkTime();
            }
            if (CurrentTab == "Short"){
                ShortTime = TempTime
                timer.GetShortTime();
            }
            if (CurrentTab == "Long"){
                LongTime = TempTime
                timer.GetLongTime();
            }
        };
        manualInput = TempTime;
    
    };

    SetCurrentTime(){
        if(status != "paused"){
            seconds = 0;
            if(CurrentTab == "Work"){
                CurrentTime = WorkTime;
            }
            else if(CurrentTab == "Short"){
                CurrentTime = ShortTime;
            }
            else{
                CurrentTime = LongTime;
            }
        }
        if(status == "paused"){
            CurrentTime = CurrentPauseMin;
            seconds = CurrentPauseSec;
        }
        if(manualInput != 0){
            CurrentTime = manualInput;
            seconds = 0;
        }
    };

    SetPausedTime(){
        CurrentPauseMin = CurrentTime;
        CurrentPauseSec = seconds;
        PausedTab = CurrentTab;
        status = "paused";
    }


    UpdateTimer(){
        countdown.innerHTML = `${CurrentTime} minutes : ${seconds} seconds`;
        if(CurrentTime != 0 && seconds == 0){
            CurrentTime--;
            seconds = 60
        }
        if(CurrentTime == 0 && seconds == 0){
            countdown.innerHTML = "Done!"
            tabs.LaunchVideo();
            timer.StopTimer();
            status = "off";
        }
        seconds--;
    };

    StartTimer(){

        if(status == "paused" && PausedTab == CurrentTab){
            CurrentTime = CurrentPauseMin;
            seconds = CurrentPauseSec;
        }
        else {
            status = "on";
            timer.SetCurrentTime();
        };
        tabs.RemoveHyperlinks();
        Interval = setInterval(timer.UpdateTimer, 1000);
        
    };
    
    
    
    StopTimer(){
        clearInterval(Interval);
        timer.SetPausedTime();
        tabs.RestoreHyperlinks();

    
    };
    
    ResetTimer(){
        clearInterval(Interval);
        if(manualInput == 0){
           timer.SetDefaults(); 
        }
        else{
            timer.SetCurrentTime();
        }
        tabs.RestoreHyperlinks();
        

    
    };

}






