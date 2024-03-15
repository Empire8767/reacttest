import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            {/* First Class Here */}
            <div className="col-lg-6"></div>

            {/* Second Class Here */}
            <div className="col-lg-6 col-md-5">
              <div className="offset-md-1  offset-sm-1 text-section  text-center   ">
                <h1 className=" h1 mt-3">Create Account</h1>
                <button
                  className="btn btn-outline-dark  w-75 mt-3  p-3"
                  style={{ fontWeight: "700", fontSize: "1rem" }}
                >
                  {" "}
                  Sign Up With Google &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-brands fa-google fa-beat"></i>{" "}
                </button>

                <h2 className="title mt-4 offset-lg-3 offset-sm-3 offset-md-3 ">
                  Or
                </h2>

                <form className="offset-2 ">
                  <div className="form-group mt-2 ">
                    <input
                      type="email"
                      className="form-control  w-75  mt-4"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Full Name"
                    />
                    <br />
                    <input
                      type="email"
                      className="form-control mt-4  w-75"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                    <br />
                    <input
                      type="password"
                      className="form-control mt-4 w-75"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Password"
                    />
                  </div>
                </form>

                <button
                  className="btn mt-5 w-75"
                  style={{
                    backgroundColor: " #ff4e00",
                    fontSize: "2rem",
                    color: "#fff",
                    borderRadius: "30px",
                  }}
                >
                  Create Account
                </button>

                <p
                  className="first para mt-3"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Already Have An Account?{" "}
                  <span style={{ color: " #ff4e00", cursor: "pointer" }}>
                    Log In
                  </span>
                </p>

                <ul class="list-unstyled jus social-icon mt-4 mb-md-0 offset-md-4">
                  <li>
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-square-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
