const NavBar = () => {
  return (
    <div>
      <header>
        <a href="/" class="logo"><i class="fas fa-utensils"></i>Resto App</a>
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#speciality">speciality</a>
          <a href="#popular">popular</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="/stepper"><i class="fas fa-shopping-cart"></i></a>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
