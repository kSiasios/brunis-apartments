export default function Hamburger(props) {
  return (
    <button className="hamburger" onClick={props.menuTogglerFunction}></button>
  );
}
