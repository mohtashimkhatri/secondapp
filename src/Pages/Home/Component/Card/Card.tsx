import React from "react";
import "./Card.css";
import Button from "../../../../Component/Button/Button";
 type privacy = {
    heading:string,
    content:string,
    icon:any
    
 }
function Card(props:privacy) {
  return (
    <>
      <div className="Cradmain">
        <div className="py-2 m-auto">
          <div className="mar">
{props.icon}
          </div>
          <h3 className="text-center">{props.heading}</h3>
          <h5 className="py-3 text-center">
            {props.content}
          </h5>
          <div className="mx-5">
            <Button label="became a saller" />
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Card;
