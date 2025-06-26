Project Write-Up: QC Realty Website

🌍 Project Overview

The goal of this project was to build a responsive, modern real estate website for a boutique agency named QC Realty. The site was built using React, with React Router for client-side navigation, and custom CSS for styling and animations.

The homepage showcases key offerings (Buying, Selling, Renting), features a call-to-action section, property highlights, a contact form, and a footer with business details. Additional pages like "About Us" were planned using routing.

✨ Features Implemented

Navigation bar with site sections (Home, About Us, Contact)

Hero banner with business branding

Three service cards (Buying/Selling/Renting) with:

Image hover effect showing "Discover"

Static label always visible underneath

"Explore QC Realty" section with company description and call-to-action

Featured Homes horizontal scrolling section

Contact Us form with name, email, and message inputs

Fully designed footer with quick links, business hours, and contact info

🚮 Challenges Encountered

1. File Naming Case Sensitivity

Issue: Had HomePage.tsx but imported it as homePage, causing a case mismatch error on macOS.

Solution: Renamed imports and filenames to be consistently HomePage.

2. Routing Errors

Issue: Attempted to assign two components to the same path ("/") in React Router.

Solution: Gave each component a unique route (e.g., "/" for HomePage and "/about" for AboutUs).

3. Navigation with <li> Elements

Issue: Needed to make list items function as navigation links.

Solution: Used React Router's <Link> to wrap each <li>, enabling navigation without page refresh.

4. CSS Hover Effects

Issue: Wanted "Discover" text to fade in on image hover while keeping "Buying/Selling/Renting" always visible.

Solution: Created separate CSS classes: one for the fading hover label (.hover-label) and one for the static text (.static-label).

5. Missing Modules & Imports

Issue: Encountered Cannot find module errors.

Solution: Verified file existence, naming, and corrected import paths.

6. Understanding NPM

Issue: Unsure what npm was and when to use it.

Solution: Learned that npm install is used once per project to add dependencies like react-router-dom.

📅 Next Steps

Build out additional pages (e.g., About Us, Services, Listings)

Add interactivity to Featured Homes (e.g., image previews, modals)

Connect the contact form to an email service or backend

Implement responsiveness for mobile and tablet views

📚 Lessons Learned

React Router is powerful but requires strict structure

File naming consistency is critical in TypeScript/React projects

CSS effects can greatly enhance UX but should be clearly separated in logic

Documenting errors and fixes helps speed up future development

