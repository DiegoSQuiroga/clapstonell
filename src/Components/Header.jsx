import Logo from '../assets/images/Logo.svg';

function Header() {
    return (
      <header>
        <img src={Logo} alt="logo little lemon" />
      </header>
    );
}

export default Header;