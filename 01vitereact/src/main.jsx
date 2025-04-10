// import React from 'react' 
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }
// // const reactElement = {
// //   type: 'a',
// //   props: {
// //       href: 'https://google.com',
// //       target: '_blank',
// //   },
// //   children: 'Click me to visit Google',
// // };

// // const reactElement = React.createElement(
// //   'a',
// //   {href: 'https://google.com',target:'_blank'},
// //   'click me to visit google'
// // )

// // const anotherElement = (
// //   <a href="https://google.com" target='_blank'>Visit Google</a>
// // )
// createRoot(document.getElementById('root')).render(
//     // reactElement
//     // anotherElement
//     // <reactElement/> wrong for type,props...
//     <App />
//     //or MyApp()
// )
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import App from './App.jsx'; // Make sure App.jsx exists and exports a valid React component

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
const anotherUser = "chai aur react";
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// Get the root container from the DOM
const rootContainer = document.getElementById('root');

// Ensure the root container exists in your index.html
if (rootContainer) {
  // Create a root for React
  const root = ReactDOM.createRoot(rootContainer);

  // Render your desired component or element
  root.render(
    // Uncomment the one you want to render:
    reactElement
    // anotherElement
    // <MyApp />
    //<App /> // Assuming App.jsx exists and is valid
  );
} else {
  console.error('Root container is missing in index.html');
}
