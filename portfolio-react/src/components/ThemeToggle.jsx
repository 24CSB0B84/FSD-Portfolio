import './ThemeToggle.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
export default ThemeToggle;
