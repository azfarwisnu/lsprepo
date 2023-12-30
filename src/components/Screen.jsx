import React from "react";

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        <div className="row justify-content-center position-relative">
          <div className="col-12 col-md-4 p-0 vh-100">
            <img
              src="https://cdn.discordapp.com/attachments/1101531709670969364/1190184857842765965/delicious_1.png?ex=65a0e106&is=658e6c06&hm=fa110c0f853df772b7ad4ceb1cde4a88da55788b95a8dd41d27996bb8d154c0e&"
              alt="screen"
              className="img-fluid vh-100 object-fit-cover"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
