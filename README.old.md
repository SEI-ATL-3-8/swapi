<img src="https://i.imgur.com/go18uJE.jpg">

# Star Wars API - React Router & useEffect practice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://www.swapi.tech/) and render its data. Create a new react app in this folder. Hardcode the backend urls, don't worry about storing them in a .env file.

## Core Goals
1. Obtain all of the starships from the API. Use `useEffect` to make the request as soon as your topmost-level component loads, and store it in state.
2. For each one ship in state, render a `<Link>` in for that starship. The link should lead to `/ships/<theSelectedShipsId>`, and display the ship's name.
3. When a starship `<Link>` is clicked, a `<StarshipPage>` component should be rendered. Pass into the StarshipPage the id parameter from the url. Remember that this comes from the argument to your Route's `render` function:
```js
<Route
  path="/ships/:id"
  render={(routingProps) => (
    // log routingProps in here to see what info is available!
    // find the id, and pass it as a prop into your component
    // return a component from this function to get it onto the page
  )} 
/>
```
4. When the StarshipPage component loads, it should make a request to get the full details about the specified ship. Display that ship's name, model, manufacturer, and any other attributes you find interesting.
5. The StarshipPage should have a "Return to Starship List" link. Hint: you'll need a route that displays your list component

## Stretch goals
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
2. Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship. This will require making a request for each pilot in the ship's pilots list. (Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, show a No Pilots message.)
