# Space Tourism Website

This project was done as a challenge on Frontend Mentor.

Challange can be found here: https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3

The challange is to recreate a website as closely as possible with the provided assets and the figma wireframes as a guideline for styling and layout.

I chose to create this in React, and was mainly practice for the utilization of Components and Hooks as well as general practice for HTML and CSS.
This project is essentially complete, the only issue is that its not fully responsive. Theres 2 breakpoints for mobile and tablet resolutions, and things start to break and get wrapped inbetween those breakpoints. It also doesn't scale well with resolutions bigger than 1920x1080. Using Flex and Grid would've alleviated this issue(see notes for other things I learned while working on this project). I'm going to leave this project where it is now, issues and all, so that in the future I'll be able to see my progression as a developer.

### Notes

Things I did wrong:

- Crew page has multiple different states for things like crew name, role, and bio. (Fixed this in later components by using state objects)
- The CSS is all in one file.(Should learn a CSS compiler for the future. navigating through the CSS file was a nightmare.)
- Using float most of the time. fine at certain points but finicky to work with. (Learned to use flex and flex-direction in the later stages of development, way easier).
  - Using flex and grid would've also made making the website responsive so much easier.
- Uniformity in CSS, units are all over the place. Started with em, moved to %s, then ended with mostly rem. (pick one unit and stick with it)

