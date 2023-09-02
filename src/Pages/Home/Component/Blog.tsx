import React from "react";
import "./AllComponent.css";
import Button from "../../../Component/Button/Button";
import Card from "./Card/Card";
import { CgGym } from "react-icons/cg";
import { SiOpenaigym } from "react-icons/si";
import { MdOutlineSportsGymnastics } from "react-icons/md";



function Blog() {
  return (
    <>
      <div className="backgroundimagdiv">
        <div className="setting">
          <h3 className="text-danger">_____ OUR SERVICE FOR YOU</h3>
        </div>
        <div className="displaywalisetting py-5">
          <div>
            <h1 className="heading1 text-white p">
              PUSH YOUR LIMITS FORWAD <br /> WE OFFER TO YOU
            </h1>
          </div>
          <div className="my-5">
            <Button label="MORE SERVICES" />
          </div>
        </div>
        <div className="container">
          <div className="row p-3">
            <div className="col-md-4">
              <Card
                heading="QUALITY EQUIREMENT"
                content="he sea freight service has grown consider ably in recent years. We
            spend timetting to kn."
                icon={<CgGym fontSize={100} />}
              />
            </div>
            <div className="col-md-4">
              <Card
                heading="HEART CRYING"
                content="he sea freight service has grown consider ably in recent years. We
            spend timetting to kn."
                icon={<SiOpenaigym fontSize={100} />}
              />
            </div><div className="col-md-4">
              <Card
                heading="GYM STRAGRICES"
                content="The sea freight service has grown consider ably in recent years. We spend timetting to kn."
                icon={<MdOutlineSportsGymnastics fontSize={100} />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
