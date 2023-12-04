import React from "react";
import "./RoadMap.css";

export default function RoadMap() {
  return (
    <div className="main_roadmap" id="Roadmap">
      <div className="container">
        <h1 className="main_heading text-center">Road Map</h1>
        <div className="row justify-content-around mt-5">
          <div className="col-md-3">
            <div className="stages">
              <h1>Stage 1</h1>
              <p className="text-white font_f">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium voluptatibus velit sed. Totam quis autem amet
                aliquam quisquam provident iste nemo veniam saepe odit natus
                quibusdam quam, cupiditate dolorum incidunt?
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <div className="stages">
              <h1>Stage 2</h1>
              <p className="text-white font_f">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium voluptatibus velit sed. Totam quis autem amet
                aliquam quisquam provident iste nemo veniam saepe odit natus
                quibusdam quam, cupiditate dolorum incidunt?
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <div className="stages">
              <h1>Stage 3</h1>
              <p className="text-white font_f">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium voluptatibus velit sed. Totam quis autem amet
                aliquam quisquam provident iste nemo veniam saepe odit natus
                quibusdam quam, cupiditate dolorum incidunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
