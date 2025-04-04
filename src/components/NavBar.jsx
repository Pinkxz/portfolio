import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function NavBar() {
  return (
    <nav style={styles.navbar}>
      {/* Ícones sociais */}
      <div style={styles.socialIcons}>
        <a href="https://github.com/Pinkxz" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/victor-jesus-284b1a359/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/pink.x.z" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram />
        </a>
      </div>

      {/* Links de navegação */}
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>Sobre</a></li>
        <li><a href="#skills" style={styles.link}>Habilidades</a></li>
        <li><a href="#projects" style={styles.link}>Projetos</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#2e2b26",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
  },
  socialIcons: {
    display: "flex",
    gap: "20px",
  },
  icon: {
    fontSize: "24px",
    color: "white",
    transition: "0.3s",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    gap: "30px",
    listStyle: "none",
  },
  link: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "10px 15px",
    transition: "0.3s",
  },
};

export default NavBar;
