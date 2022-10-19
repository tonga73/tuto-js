import Navigation from "../navigation/navigation.js";

function Header() {
  return `
    <header class="header">
      ${Navigation()}
      <h3 class="font-shrikhand">LOGO</h3>
    </header>
  `;
}

export default Header;
