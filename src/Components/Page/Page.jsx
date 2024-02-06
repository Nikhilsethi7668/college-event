import React from "react";
import KitchenSinkExample from "../Card/Card";

import "./page.css";

function Page() {
  return (
    <div className="page">
      <h1 className="heading">IMSEC Events</h1>
      <div className="cards">
        <KitchenSinkExample
          title="Events"
          details="This is the collection of all events of our college"
          button="Open"
          image="https://www.cityofnewportrichey.org/wp-content/uploads/2018/02/Events.gif"
          route="/events"
          size="22rem"
        />
        <KitchenSinkExample
          title="Gallary"
          details="This is the collection of all beautiful pictures captured in saveral events"
          button="Open"
          image="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?cs=srgb&dl=pexels-%C2%B6project-atlas-1674049.jpg&fm=jpg"
          route="/gallary"
          size="22rem"
        />
        <KitchenSinkExample
          title="Our Winners"
          details="Here you can see all the winners of saveral events "
          button="Open"
          image="https://yis.org/wp-content/uploads/2020/05/winners.jpg"
          route="/winners"
          size="22rem"
        />
        <KitchenSinkExample
          title="Payment Status"
          details="Get to know about your payment status"
          button="Open"
          image="https://cdn.pixabay.com/photo/2021/03/19/13/40/online-6107598_1280.png"
          route="/payments"
          size="22rem"
        />
        <KitchenSinkExample
          itle="Attendance"
          details="Apply and track your attendance during the event"
          button="Open"
          image="https://t3.ftcdn.net/jpg/01/25/05/50/360_F_125055050_loLfRxF2fJi5Ge0t49jmaIMBUhlmchwE.jpg"
          route="/attendance"
          size="22rem"
        />
        <KitchenSinkExample
          title="Events Calander"
          details="This calander contains all important dates"
          button="Open"
          image="data:image/jpeg;base64,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"
          route="/calander"
          size="22rem"
        />
        <KitchenSinkExample
          title="Communicate with Hosts"
          details="This alows you to communicate with event hosts"
          button="Open"
          image="https://www.lianedavey.com/wp-content/uploads/2015/11/3COze-icons-02-1080x675.jpg"
          route="/communicate"
          size="22rem"
        />
      </div>
    </div>
  );
}

export default Page;
