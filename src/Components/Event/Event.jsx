import React from 'react'
import { useParams } from 'react-router-dom'
import KitchenSinkExample from '../Card/Card';
import business from "../Event/business.jpeg"
import '../Event/Event.css'
import apti from "../Event/apti.jpeg"

function Event() {
    const { eventname } = useParams();
    console.log(eventname);

    return (
        <div className="event">
            <center>
                <h1>Welcome to {eventname} 2024</h1>
            </center>

            <div className="contests">

                <KitchenSinkExample
                    title="100 Ka Dum"
                    details="Participation fees -: 100 Rs/Team
                    For more details  contact Co-ordinators"
                    button="Participate"
                    image="https://pbs.twimg.com/profile_images/1190508448/100KaDum_400x400.png"
                    route="https://docs.google.com/forms/d/e/1FAIpQLSd6hyDOTVBl6QvrP5a7bf4oGuXKEcefizCFvx98nS-vX7a9iA/viewform"
                    size="20rem"
                    height="50vh"
                />
                <KitchenSinkExample
                    title=" Business Plan "
                    details="Participation fees -: 200 Rs/Team
                    
                    For more details  contact Co-ordinators"
                    button="Participate"
                    image={business}
                    route="https://docs.google.com/forms/d/e/1FAIpQLSd6hyDOTVBl6QvrP5a7bf4oGuXKEcefizCFvx98nS-vX7a9iA/viewform"
                    size="22rem"
                    height="50vh"
                />
                <KitchenSinkExample
                    title="Blind Coding"
                    details="Participation fees -: 100 Rs/ participant
                    For more details  contact Co-ordinators"
                    button="Participate"
                    image="https://technoutsav.files.wordpress.com/2018/01/blind-coding.png"
                    route="https://docs.google.com/forms/d/e/1FAIpQLSd6hyDOTVBl6QvrP5a7bf4oGuXKEcefizCFvx98nS-vX7a9iA/viewform"
                    size="22rem"
                    height="50vh"
                />
                <KitchenSinkExample
                    title="Webathon"
                    details="Participation fees -: 200 Rs/Team
                    For more details  contact Co-ordinators"
                    button="Participate"
                    image="https://www.trinity.edu.np/assets/backend/uploads/Events/Webdesign.png"
                    route="https://docs.google.com/forms/d/e/1FAIpQLSd6hyDOTVBl6QvrP5a7bf4oGuXKEcefizCFvx98nS-vX7a9iA/viewform"
                    size="22rem"
                    height="50vh"
                />
                <KitchenSinkExample
                    title="Aptifesta"
                    details="Participation fees -: 50 Rs/participants
                    For more details  contact Co-ordinators"
                    button="Participate"
                    image={apti}
                    route="https://docs.google.com/forms/d/e/1FAIpQLSd6hyDOTVBl6QvrP5a7bf4oGuXKEcefizCFvx98nS-vX7a9iA/viewform"
                    size="22rem"
                    height="50vh"
                />

            </div>
        </div>
    )
}

export default Event