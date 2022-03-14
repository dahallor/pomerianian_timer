let timer;
let listener;
var errors;
var tabs;
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')

timer = new Timer();
listener = new Listen();
errors = new Errors();
tabs = new Tabs();

timer.SetDefaults();
timer.GetWorkTime();


listener.WorkButton.addEventListener("click", timer.GetWorkTime);
listener.ShortButton.addEventListener("click", timer.GetShortTime);
listener.LongButton.addEventListener("click", timer.GetLongTime);

listener.SetTime.addEventListener("click", timer.SetTimer);
listener.StartTime.addEventListener("click", timer.StartTimer);
listener.StopTime.addEventListener("click", timer.StopTimer);
listener.ResetTime.addEventListener("click", timer.ResetTimer);

listener.Open.addEventListener("click", tabs.LaunchVideo);
listener.Close.addEventListener("click", tabs.ExitModal)

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