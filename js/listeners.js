class Listen{
    constructor(elements, tabs, timer){
        elements.WorkButton.addEventListener("click", timer.GetWorkTime);
        elements.ShortButton.addEventListener("click", timer.GetShortTime(elements));
        elements.LongButton.addEventListener("click", timer.GetLongTime);

        elements.SetTime.addEventListener("click", timer.SetTimer);
        elements.StartTime.addEventListener("click", timer.StartTimer);
        elements.StopTime.addEventListener("click", timer.StopTimer);
        elements.ResetTime.addEventListener("click", timer.ResetTimer);

        elements.Open.addEventListener("click", tabs.LaunchVideo);
        elements.Close.addEventListener("click", tabs.ExitModal)

    }

}