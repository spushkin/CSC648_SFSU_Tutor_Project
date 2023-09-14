import React, { Fragment } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const headerStyle = {
  height: "30%",
  width: "50%",
};

const textBox = {
  height: "70%",
  verticalAlign: "top",
};

function SiarheiPushkin() {
  return (
    <Fragment>
      <NavMenu />
      <div id="outer-container">
        <table id="table-info">
          <tr>
            <td className="goBackStyle">
              <h2 className="interFont">
                <Link to="/about">Go Back</Link>
              </h2>
              <h2 className="interFont">
                <Link to="/about">&lt;</Link>
              </h2>
            </td>

            <td style={{ width: "20%" }}>
              {/* Here you will add the link of you photo in this image tag, make sure that your file type is correct */}
              {/* <img src={require('../images/YOUR_IMAGE_FILE.PNG or .JPG or .JPEG')} alt="YOUR NAME HERE" className="teamPhotoPage" /> */}
              <img
                src={require("../images/Profile_Siarhei.jpg")}
                alt="Siarhei Pushkin"
                className="teamPhotoPage"
              />
            </td>

            <td style={{ width: "60%" }}>
              <table id="table-info">
                <tr>
                  <td style={headerStyle}>
                    {/* Here you will change Name to YOUR NAME and Role to YOUR ROLE */}
                    <h1 id="innerTableStyle">Siarhei Pushkin</h1>{" "}
                    <br style={{ clear: "left" }} />
                    <h3 id="innerTableStyle">Documentation</h3>{" "}
                    <br style={{ clear: "left" }} />
                    {/* Here you add a small description about you, feel free to write alot or very little. As long as you fill anything in. */}
                    <h4
                      className="interFont"
                      id="innerTableStyle"
                      style={{ width: "100%" }}
                    >
                      <br />
                      <i>
                        My name is Siarhei Pushkin. I'm working on documentation
                        for this project. I'm passionate about coding (mostly
                        experienced in C and Java) and love working with
                        computer hardware.
                      </i>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td style={{ textBox }} colspan="3"></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
}

export default SiarheiPushkin;
