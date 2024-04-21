import { useFormik } from "formik";

export default function Leson15() {
  const formik = useFormik({
    initialValues: {
      username: "TuongLN",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
        </div>
        <div>
          <label>Remember me</label>
          <input
            type="checkbox"
            value={formik.values.rememberMe}
            onChange={formik.handleChange}
            name="rememberMe"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}