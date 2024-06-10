import React from "react";

export default function About() {
  return (
    <>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <p className="margin_0">
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software. Today it's seen all around the web; on
                  templates, websites, and stock designs. Use our generator to
                  get your own, or read on for the authoritative history of
                  lorem ipsum.
                </p>
                <a className="read_more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img src="images/about.png" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
