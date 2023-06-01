// import "../App.css";
interface Props {
  darkMode: boolean;
  onToggle: () => void;
}
const ToggleTheme = ({ darkMode, onToggle }: Props) => {
  return !darkMode ? (
    <div onClick={onToggle} className="custom-control custom-switch mt-1">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitches"
      />
      <label className="custom-control-label">Switch to dark mode</label>
    </div>
  ) : (
    <div onClick={onToggle} className="custom-control custom-switch mt-1">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitches"
        checked
      />
      <label className="custom-control-label" style={{ color: "white" }}>
        Switch to light mode
      </label>
    </div>
  );
};

export default ToggleTheme;
