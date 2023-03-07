export const Questions = [
  {
    id: "1",
    questions: "What is React?",
    answer:
      "React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.",
  },
  {
    id: "2",
    questions: "What are Pure Components?",
    answer:
      "React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called. In functional components we use React.memo() API. React.memo() is a higher-order component. It takes a React component as its first argument and returns a special type of React component that allows the renderer to render the component while memoizing the output. Therefore, if the component’s props are shallowly equal, the React.memo() component will bail out the updates.",
  },
  {
    id: "3",
    questions: "What is Virtual DOM?",
    answer:
      "The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the real DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.",
  },
  {
    id: "4",
    questions: "What is context?",
    answer:
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
  },

  {
    id: "5",
    questions: "What is reconciliation?",
    answer:
      "When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.",
  },
];
