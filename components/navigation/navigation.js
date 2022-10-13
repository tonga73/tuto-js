function Navigation(links) {
  return `
    <nav id="navigation">
        ${
          !!links &&
          links.map((link) => {
            function Button() {
              return `<button id="navigation-button">${link.name}</button>`;
            }

            return Button();
          })
        }
    </nav>
`;
}

export default Navigation;
