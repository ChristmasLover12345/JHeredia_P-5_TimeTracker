Challenge by: Frontend Mentor
https://www.frontendmentor.io?ref=challenge


// Juan Heredia

 // Date Revised: 12/5/2024

 // Time Tracker

 // recreated a time tracker that uses javascript to display the time spent on an activity.


Peer reviewed by: David Monterrosa
Overall the project meets the design specifications. All hover effects are present and the timeframe buttons work. Good attention to detail. The spacing is mostly accurate and the website is responsive. I notice some minor issues with the display of the website.

<!-- 1 has been fixed -->
1. On smaller height screens some content gets covered and is not visible. A lot of the text ends up getting pushed off the cards.

<!-- 2 has been fixed -->
2. The hover effect on the card should go away when the user hovers over the ellipsis. This can be accomplished using: the ':has()' pseudo class. Consider looking into this to resolve the problem. 

<!-- I dont really know what he means by this but I added some height responsiveness just in case -->
3. There are some minor spacing discrepencies. For example between the current time and the bottom of the card.

<!-- 4 has been fixed, added some marging to line them up -->
4. Some of the icon images are not placed accurately.

There are some issues with your code formatting.

<!-- 1 has been fixed I think, atleast based on what google told me indentation was -->
1. There is inconsistent use of indentation.

<!-- I think that fixing my indentation made my css look organized enough -->
2. The syles.css can be broken up into smaller files, to keep things organized.

<!-- 3 has been fixed (I think, not sure if I missed some classes)-->
3. You might possibly be recoding classes that bootstrap already has. For example in your styles.css you use a class called justifyEnd which seemingly does what justify-content-end does. Double check to see if you can replace some of these with bootstrap classes.

<!-- No idea what 4 refers to, but I added some text center so it maybe doesnt happen anymore (fixed?) -->
4. The use of position absolute seems to do more harm than good when it comes to responsiveness. This may be why some text gets pushed off the cards.

> 5 has been fixed
5. Consider using semantic tags and comments to make your html more readable