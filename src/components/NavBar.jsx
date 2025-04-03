function NavBar() {
    return (
      <nav className="bg-gray-800 p-4 fixed w-full top-0">
        <ul className="flex justify-center space-x-6">
          <li><a href="#home" className="text-white hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="text-white hover:text-blue-400">Sobre</a></li>
          <li><a href="#skills" className="text-white hover:text-blue-400">Habilidades</a></li>
          <li><a href="#projects" className="text-white hover:text-blue-400">Projetos</a></li>
        </ul>
      </nav>
    );
  }
  export default NavBar;
  