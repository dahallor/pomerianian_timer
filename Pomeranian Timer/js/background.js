class Errors{
    constructor(){

    }

    ErrorHandling(TempTime){
        if(TempTime > 120){
            alert("Really? You're gonna use a timer for more than 2 hours? Why even use this? Just take Adderal if you're gonna try and be super human.");
            return 0;
        }
        if(TempTime <= 0){
            alert("Really? How are we supposed to count down from zero? Or count down from a negative? Did you fail second grade math? No wonder America is no longer a super power.");
            return 0;
        }
        if(Number.isInteger(TempTime) == false){
            alert("Please enter whole numbers under 120. No decimals, letters, or special characters.");
            return 0;
        }
        if(TempTime == 69){
            alert("Haha, Nice.");
            return 1;
        }
        return 1;
    };

}