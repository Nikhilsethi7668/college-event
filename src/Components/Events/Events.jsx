import React from 'react'
import KitchenSinkExample from '../Card/Card'
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
                    route="/aaghaaz"
                    size="15rem"
                    height="20rem"

                />

            </div>
            <center>
                <h1>Previous events </h1>
            </center>
            <div className="past">
                <KitchenSinkExample
                    title="AAGHAAZ"
                    details="Event date- 09/02/2024"
                    button="Check Contests"
                    image={aaghaazimg}
                    route="/aaghaaz-contest"
                    size="15rem"
                    height="20rem"

                />

            </div>
        </div>
    )
}

export default Events