import React from "react";
import Title from "../../Typography/Title";
import "./events.css";
import Event from "./Event";

const Events = () => {
  const image1 =
    "https://images.unsplash.com/photo-1504197906860-da867658e819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80";

  const image2 =
    "https://images.unsplash.com/photo-1537025130223-dccf9faeff7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80";

  const image3 =
    "https://images.unsplash.com/photo-1498676077434-7540603d2dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80";

  return (
    <div>
      <Title clr="rgb(218, 83, 83)" txtAlign="Center" padding="30px">
        OUR EVENTS
      </Title>

      <div className="Events">
        <Event
          subtitleTxt="Morning Gathering"
          imgSource={image1}
          imgAlt="candle picture"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Event>

        <Event subtitleTxt="Spirit And Truth" imgSource={image2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Event>

        <Event subtitleTxt="Sunday School" imgSource={image3}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Event>
      </div>
    </div>
  );
};

export default Events;
