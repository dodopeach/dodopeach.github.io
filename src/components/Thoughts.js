import { Link } from "react-router-dom";
function Thoughts() {
  return (
    <>
      <h2>
        <Link to="/">guzus</Link> | Thoughts
      </h2>

      <ul>Happiness comes as a bundle.</ul>
      <ul>The world isn't that pretty, and we can do better.</ul>
      <ul>
        Finance is the essence of abstraction. We need to upgrade this platform
        carefully and rapidly.
        <ul>Bitcoin is a great invention.</ul>
      </ul>
    </>
  );
}

export { Thoughts };
