import useMenuControl from '../hooks/useMenuControl';
import './Nav.css';

export default function Nav() {
  const { isMenuOpen, clickHandler } = useMenuControl();

  return (
    <nav className={`${isMenuOpen ? 'menuOpen' : ''}`}>
      {!isMenuOpen ? (
        <button type="button" onClick={clickHandler}>
          Open Menu
        </button>
      ) : (
        <div>
          <p>Nav Item 1</p>
          <p>Nav Item 2</p>
          <p>Nav Item 3</p>
          <button type="button" onClick={clickHandler}>
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
}
