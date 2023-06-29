// import "../App.css";
interface Props {
  darkMode: boolean;
  onToggle: () => void;
}
const ToggleTheme = ({ darkMode, onToggle }: Props) => {
  return (
    <div onClick={onToggle} className="custom-control custom-switch mt-1">
      {darkMode ? (
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          defaultChecked
        />
      ) : (
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
        />
      )}

      <label
        className="custom-control-label"
        style={{ color: darkMode ? "white" : "black" }}
      >
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </label>
    </div>
  );
};

export default ToggleTheme;
