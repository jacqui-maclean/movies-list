interface Props {
  darkMode: boolean;
  onToggle: () => void;
}
const ToggleTheme = ({ darkMode, onToggle }: Props) => {
  return (
    <div
      onClick={onToggle}
      className="form-check form-switch"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {darkMode ? (
        <input
          type="checkbox"
          className="form-check-input"
          id="flexSwitchCheckChecked"
          defaultChecked // removes react warning react-dom.development.js:86 Warning: A component is changing an uncontrolled input to be controlled.
        />
      ) : (
        <input
          type="checkbox"
          className="form-check-input"
          id="flexSwitchCheckChecked"
        />
      )}

      <label
        className="form-check-label"
        style={{ color: darkMode ? "white" : "black" }}
      >
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </label>
    </div>
  );
};

export default ToggleTheme;
