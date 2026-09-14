# IEDC Innovation Hub

This is an single-page responsive IEDC Pitch Submission website I created as part of IEDC Innovation Hub.

## What it does

- So firstly in the hero section I included a punchline(used a custom font blode starkly which I discovered from a funkyfonts website) and went with a red-yellow theme taking inspiration from the IEDCMEC website.The call to action button is kept right below the punchline
- Then comes the Startup Showcase section which shows startup cards (title, category, team, description)
- The cards follows a grid layout.Each card has an image related to the field,Startup Name,no of members,a description and a vote button on each card which works using useState
- This section also has a search + filter by category by which users can search for startups from a particular sector
- Then lastly there is a pitch submission form (name, title, category, summary, link)
- Navbar links scroll to the respective sections which helps in the interactivity

## My Experience building this application
- After finishing a React tutorial and building the project along with it, I learned a lot,but when you're taking in that much information at once, it's natural to forget some of it.
- So I used the same tutorial as reference again while building this. A lot of the pieces were common like cards, search form, navbar, grid layout, and so on.
- I also didn't know where to start building this from scratch, so I based it on the structure of the project I had already built.
- One thing I discovered along the way,I actually love Tailwind CSS. CSS used to scare me,but Tailwind made it way easier and more fun to work with.

## How to run

```bash
npm install
npm run dev
```

The application opens at localhost:5173

## file structure

```
src/
  components/
    NavBar.jsx      - navbar
    Category.jsx    - search bar + filter pills
    Cards.jsx        - startup card + vote button
    ideaForm.jsx     - pitch form
  pages/
    Home.jsx         - everything else lives here
```


built for IEDC club demo.
