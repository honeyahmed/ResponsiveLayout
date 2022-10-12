import React from "react";
import { ImImage } from "react-icons/im";
const ResponsiveItem = () => {
  return (
    <div className="responsive-container">
      <div className="responsive-items">
        <div className="responsive-item">
          <div className="img-res">
            <ImImage style={{ fontSize: "85px" }} />
          </div>
          <div className="content-res">
            <h3>Content Header</h3>
            <p className="date">Date Category</p>
            <p>
              A description which may flow for several lines and give context to
              the content.
            </p>
            <div className="username">
              <div className="circle">
                <ImImage />
              </div>
              <p>Username</p>
            </div>
          </div>
        </div>
        <div className="responsive-item">
          <div className="img-res">
            <ImImage style={{ fontSize: "85px" }} />
          </div>
          <div className="content-res">
            <h3>Content Header</h3>
            <p className="date">Date Category</p>
            <p>
              A description which may flow for several lines and give context to
              the content.
            </p>
            <div className="username">
              <div className="circle">
                <ImImage />
              </div>
              <p>Username</p>
            </div>
          </div>
        </div>
        <div className="responsive-item">
          <div className="img-res">
            <ImImage style={{ fontSize: "85px" }} />
          </div>
          <div className="content-res">
            <h3>Content Header</h3>
            <p className="date">Date Category</p>
            <p>
              A description which may flow for several lines and give context to
              the content.
            </p>
            <div className="username">
              <div className="circle">
                <ImImage />
              </div>
              <p>Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveItem;
