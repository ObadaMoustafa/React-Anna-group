function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
export default Button;

// 4. Inside the `<Button>` component, create a `<button>` that has the text "Get a dog!" and `onClick` attribute
// 5. Pass down the function `getDogPhoto` to `<Button>`
// 7. However, when there are no dogs in the array yet make sure to display the message "Get your first dog by clicking the button!"
