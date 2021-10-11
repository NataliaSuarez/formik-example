import { useFormik } from "formik";
import { isValidEmail } from "./utils/validate";

const styles = {
  container: {
    marginTop: "10%",
    marginBottom: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    margin: "30px",
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
  button: {
    margin: "30px",
    border: "none",
    backgroundColor: "#2185d0",
    color: "#fafafa",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  error: {
    color: "#e11212",
    fontSize: "11px",
    margin: "2px",
  },
};

const App = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "* Required";
    if (!values.lastname) errors.lastname = "* Required";
    if (!values.email) errors.email = "* Required";
    if (values.email && !isValidEmail(values.email))
      errors.email = "Should be a valid email!";
    return errors;
  };

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Nombre</label>
        <input type="text" style={styles.input} {...getFieldProps("name")} />
        {touched.name && errors.name ? (
          <div style={styles.error}>{errors.name}</div>
        ) : null}
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Apellido</label>
        <input
          type="text"
          style={styles.input}
          {...getFieldProps("lastname")}
        />
        {touched.lastname && errors.lastname ? (
          <div style={styles.error}>{errors.lastname}</div>
        ) : null}
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Correo</label>
        <input type="text" style={styles.input} {...getFieldProps("email")} />
        {touched.email && errors.email ? (
          <div style={styles.error}>{errors.email}</div>
        ) : null}
      </div>
      <button style={styles.button} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default App;
