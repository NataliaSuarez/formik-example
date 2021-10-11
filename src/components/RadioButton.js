import { useField } from "formik";

const styles = {
  inputContainer: {
    margin: "10px 20px",
    width: "70%",
  },
  label: {
    marginBottom: "5px",
    fontSize: "17px",
    fontWeight: "bold",
    color: "rgba(3,3,3,0.8)",
    display: "flex",
    alignItems: "center",
  },
  input: {
    border: "none",
    borderRadius: "4px",
    background: "rgba(3,3,3, 0.025)",
    outline: "none",
    height: "32px",
    paddingLeft: "5px",
  },

  error: {
    color: "#e11212",
    fontSize: "11px",
    margin: "2px",
  },
};

const RadioButton = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });

  return (
    <div style={styles.inputContainer}>
      <label style={styles.label}>
        <input type="radio" style={styles.input} {...field} {...props} />
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
