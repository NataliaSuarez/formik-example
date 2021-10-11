import { useField } from "formik";

const styles = {
  inputContainer: {
    margin: "10px 20px",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "17px",
    fontWeight: "bold",
    color: "rgba(3,3,3,0.8)",
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
    margin: "0 2px 4px 2px",
  },
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div style={styles.inputContainer}>
      <label style={styles.label}>{label}</label>
      <input style={styles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
