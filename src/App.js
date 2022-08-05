import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Dialog,
  Typography,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { todoSchema } from "./validation/todo-validation";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const onSubmit = (value, { resetForm }) => {
    console.log(value);
    const { firstName, lastName, gender } = value;

    dispatch({
      type: "addTodo",
      payload: {
        firstName,
        lastName,
        gender,
      },
    });
  };
  const handleRemoveList = (name) => {
    dispatch({ type: "deleteTodo", payload: name });
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box border={1} mt={1}>
            <Box sx={{ width: "300px", margin: "auto", height: "600px" }}>
              <Formik
                initialValues={todoSchema}
                validationSchema={todoSchema}
                onSubmit={onSubmit}
              >
                {({ isValid }) => {
                  return (
                    <Form>
                      <FormControl
                        error
                        variant="standard"
                        fullWidth
                        margin="normal"
                      >
                        <Field
                          as={TextField}
                          id="FirstName"
                          label="FirstName"
                          name="firstName"
                          type="text"
                          variant="outlined"
                        />
                        <ErrorMessage
                          component={FormHelperText}
                          name="firstName"
                        />
                      </FormControl>
                      <FormControl
                        error
                        variant="standard"
                        fullWidth
                        margin="normal"
                      >
                        <Field
                          as={TextField}
                          id="LastName"
                          label="LastName"
                          name="lastName"
                          type="text"
                          variant="outlined"
                        />
                      </FormControl>
                      <FormControl
                        error
                        variant="standard"
                        fullWidth
                        margin="normal"
                      >
                        <Field
                          as={Select}
                          id="gender"
                          label="Gender"
                          name="gender"
                          variant="outlined"
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Field>
                      </FormControl>

                      <Button
                        variant="outlined"
                        type="submit"
                        size="large"
                        fullWidth
                        sx={{
                          mt: 20,
                          textTransform: "none",
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={1} mt={1}>
            <Box sx={{ width: "300px", margin: "auto", height: "600px" }}>
              <ul>
                {todoList.todoList.map((data, index) => {
                  return (
                    <li key={index}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          {data.gender === "Male"
                            ? `Mr ${data.firstName}${data.lastName}`
                            : data.gender === undefined
                            ? `${data.firstName}${data.lastName}`
                            : `Ms ${data.firstName}${data.lastName}`}
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => handleRemoveList(data.firstName)}
                        >
                          X
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
