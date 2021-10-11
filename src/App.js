import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import SelectInput from "./components/SelectInput";
import RadioButton from "./components/RadioButton";
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
    margin: "0 2px 4px 2px",
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
    if (!values.radio) errors.radio = "* Required";
    return errors;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form style={styles.container}>
        <TextInput name="name" label="Nombre" />
        <TextInput name="lastname" label="Apellido" />
        <TextInput name="email" label="Correo" />
        <SelectInput name="chancho" label="Tipo de Chancho">
          <option value="">Seleccione chanchito</option>
          <option value="felipe">Felipe</option>
          <option value="feliz">Feliz</option>
          <option value="triste">Triste</option>
        </SelectInput>
        <RadioButton name="radio" value="chanchito 1">
          Chanchito 1
        </RadioButton>
        <RadioButton name="radio" value="chanchito 2">
          Chanchito 2
        </RadioButton>
        <RadioButton name="radio" value="chanchito 3">
          Chanchito 3
        </RadioButton>
        <div style={{ ...styles.inputContainer, ...styles.error }}>
          <ErrorMessage name="radio" />
        </div>
        <CheckboxInput name="terms">Terminos y condiciones</CheckboxInput>
        <button style={styles.button} type="submit">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default App;
