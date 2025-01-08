import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left-row">
            <a
              target="_blank"
              href=""
              className="icon-flex phone-icon"
            >
              <i className="fa fa-phone"></i>
              <label className="phone-icon" htmlFor="">
                +28079307288
              </label>
            </a>
            <a
              target="_blank"
              href="mailto:akashkantofficial@gmail.com"
              className="icon-flex phone-icon"
            >
              <i className="fa fa-envelope"></i>
              <label className="phone-icon" htmlFor="">
                akashkantofficial@gmail.com
              </label>
            </a>
          </div>
          <div className="right-row">
            <span>
              <label htmlFor="">Need Help ?</label>
            </span>
            <span>
              <span>🇧🇩 </span>
              <label htmlFor="">EN</label>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
