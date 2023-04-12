import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <nav data-is-open="false">
      <NavMenu menuTogglerFunction={toggleMenu} />
    </nav>
  );
}

function toggleMenu() {
  const nav = document.querySelector("nav");

  const menuToggler = document.querySelector("#menu-toggler");
  const isOpen = nav.dataset.isOpen === "true";
  if (isOpen) {
    menuToggler.style.display = "none";
  } else {
    menuToggler.style.display = "block";
  }
  nav.dataset.isOpen = !isOpen;
}
