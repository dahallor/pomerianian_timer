var elements = new Elements();
var timer = new Timer();
var errors = new Errors();
var tabs = new Tabs();
//var listen = new Listen(elements, tabs, timer);


timer.SetDefaults();


//listen.setEventListner(tabs, timer, elements);

console.log(elements.WorkButton)
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
elements.LongButton.addEventListener("click", timer.GetLongTime);

elements.SetTime.addEventListener("click", timer.SetTimer);
elements.StartTime.addEventListener("click", timer.StartTimer);
elements.StopTime.addEventListener("click", timer.StopTimer);
elements.ResetTime.addEventListener("click", timer.ResetTimer);

elements.Open.addEventListener("click", tabs.LaunchVideo);
elements.Close.addEventListener("click", tabs.ExitModal)



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