---
title: Automated Greyscale with iOS Shortcuts
date: 2023-09-18 20:30:00 -06:00
redirect_from: journal/2023/automated-greyscale-with-ios-shortcuts/
---

> Decided to set an automation to turn my phone to grayscale later in the evening and I can’t describe the relief it gave my brain
> <cite><a href="https://www.threads.net/@thetimmywall/post/Cv-YFMPxZzt">@thetimmywall on Threads</a>

My friend Tim taught me a neat iOS trick. I’ve been interested in using iOS’ colour filters to set my iPhone to greyscale, but I didn’t want to do it permanently. [Tim’s Threads post](https://www.threads.net/@thetimmywall/post/Cv-YFMPxZzt) taught me that it could be automated with iOS Shortcuts. 

I now have my phone switch to greyscale when my pre-set “Wind Down” time begins. When I stop my wake up alarm the next morning, the colour returns. As bed time approaches, my phone becomes less tempting to look at. It’s great!

Here are the steps I used to create my automation: 

1. Open the [iOS Shortcuts app](https://support.apple.com/en-ca/guide/shortcuts/welcome/ios) ([If you don’t have it, you can download it here](https://apps.apple.com/us/app/shortcuts/id1462947752))
2. Go to the “Automation” tab [[Screenshot]](/src/img/greyscale-ios/001.jpg)
3. Start a new automation with the “+” in the top right corner [[Screenshot]](/src/img/greyscale-ios/002.jpg)
4. Pick your automation trigger. I searched for “Sleep” and then set the “When” to “Wind Down Begins”. You could also choose “Sleep” > “Bedtime Begins” or “Time of Day” > “Time of Day” [[Screenshot]](/src/img/greyscale-ios/003.jpg)
5. For the next step, “Do”, search for “Set Color Filters” [[Screenshot]](/src/img/greyscale-ios/004.jpg)
6. Set it to “_Turn_ color filters _On_”. This will now turn your greyscale colour filter on at your chosen trigger time. [[Screenshot]](/src/img/greyscale-ios/005.jpg)
7. To reverse this automation in the morning, create another automation. This time, search for “Sleep”, but use the “When” of “Waking Up”
8. Repeat the “Do” step by setting the action to “Set Color Filters”, but this time set it to “_Turn_ color filters _Off_”

I hadn’t paid much attention to iOS Shorctuts since the first iOS after [Apple bought _Workflow_](https://techcrunch.com/2017/03/22/apple-has-acquired-workflow-a-powerful-automation-tool-for-ipad-and-iphone/). Let me know if I’ve missed any other handy automations.