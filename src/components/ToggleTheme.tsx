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
          defaultChecked // removes react warning react-dom.development.js:86 Warning: A component is changing an uncontrolled input to be controlled.
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
