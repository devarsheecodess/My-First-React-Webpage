function Header() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src="./react-logo.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1 className="main-items">Reasons To Love React</h1>
      <ol className="main-list">
        <li>Component-Based Architecture</li>
        <li>Virtual DOM for Efficient Updates</li>
        <li>Declarative Syntax</li>
        <li>One-Way Data Binding</li>
        <li>Strong Ecosystem and Community Support</li>
      </ol>
      <p className="main-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta delectus
        debitis ipsa sequi, aut optio eum quibusdam laboriosam sapiente, unde
        autem ipsam itaque vel perspiciatis similique nisi iure fugiat odit
        nulla atque? Qui harum, voluptatibus repellat eius deleniti dolor sit
        amet consectetur, adipisicing elit. Dicta delectus debitis ipsa sequ
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p className="footer-items">
        © 2024 Devarshee Gaunekar. All rights reserved
      </p>
    </footer>
  );
}

function Assignment() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Assignment />, document.getElementById("root"));