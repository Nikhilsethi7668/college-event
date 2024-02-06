import React from 'react'
import KitchenSinkExample from '../Card/Card'
import freshers from "../Events/freshers.png"
import aaghaazimg from "../Gallary/aaghaaz.jpeg"
import "./Events.css"

function Events() {
    return (
        <div className="events">
            <center>
                <h1>Upcoming Events</h1>
            </center>
            <div className="upcoming">
                <KitchenSinkExample
                    title="AAGHAAZ"
                    details="Event date- 09/02/2024"
                    button="Check Contests"
                    image={aaghaazimg}
                    route="/events/aaghaaz"
                    size="15rem"
                    height="20rem"

                />

            </div>
            <center>
                <h1>Previous events </h1>
            </center>
            <div className="past">
                <KitchenSinkExample
                    title="Freshers"
                    details="Event date- 07/01/2024"
                    button="View Images"
                    image={freshers}
                    route="/gallary/freshers"
                    size="15rem"
                    height="20rem"

                />
                <KitchenSinkExample
                    title="DJ NIGHT"
                    details="Event date- 8/12/23"
                    button="View Images"
                    image="https://shorturl.at/asHK2"
                    route="/gallary/DJ-Night"
                    size="15rem"
                    height="20rem"
                />

            </div>
        </div>
    )
}

export default Events