import React from 'react'
import KitchenSinkExample from '../Card/Card'
import img1 from '../Gallary/chakravyuh2.jpeg'
import img2 from '../Gallary/aaghaaz.jpeg'
import './gallary.css'
function Gallary() {
    return (
        <>
            <center>
                <div className="heading">
                    <h2>
                        Events-2024
                    </h2>
                </div>
            </center>


            <div className="2024-card1">
                <div className="cards">
                    <KitchenSinkExample
                        title="Vibgyor"
                        details="Click here to get into the Vibgyor 2024"
                        button="Vibgyor"
                        image="https://i.ytimg.com/vi/UG0dXefQRkU/maxresdefault.jpg"
                        route="/gallary/vibgyor"
                        size="15rem"

                    />
                    <KitchenSinkExample
                        title="AAGHAAZ"
                        details="Click here to get into the Aaghaaz 2024"
                        button="Aaghaaz"
                        image={img2}
                        route="/gallary/aaghaaz"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="CHAKRAVYUH"
                        details="Click here to get into the Chakravyuh 2024"
                        button="Chakravyuh"
                        image={img1}
                        route="/gallary/chakravyuh"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="DJ NIGHT"
                        details="Click here to get into the DJ Night 2024"
                        button="DJ Night"
                        image="https://shorturl.at/asHK2"
                        route="/gallary/dj-night"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="FRESHERS"
                        details="Click here to get into the Freshers 2024"
                        button="Freshers"
                        image="https://shorturl.at/aU379"
                        route="/gallary/freshers"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="FAREWELL"
                        details="Click here to get into the Farewell 2024"
                        button="Farewell"
                        image="https://shorturl.at/ckEIO"
                        route="/gallary/farewell"
                        size="15rem"
                    />

                </div>
            </div>
            <center>
                <div className="heading">

                    <h2>
                        Events-2023

                    </h2>
                </div>
            </center>
            <div className="2023-card">
                <div className="cards">
                    <KitchenSinkExample
                        title="Vibgyor"
                        details="Click here to get into the Vibgyor 2024"
                        button="Vibgyor"
                        image="https://i.ytimg.com/vi/UG0dXefQRkU/maxresdefault.jpg"
                        route="/events"
                        size="15rem"

                    />
                    <KitchenSinkExample
                        title="AAGHAAZ"
                        details="Click here to get into the Aaghaaz 2024"
                        button="Aaghaaz"
                        image="https://shorturl.at/dMRU5"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="CHAKRAVYUH"
                        details="Click here to get into the Chakravyuh 2024"
                        button="Chakravyuh"
                        image="https://shorturl.at/ejmzH"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="DJ NIGHT"
                        details="Click here to get into the DJ Night 2024"
                        button="DJ Night"
                        image="https://shorturl.at/asHK2"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="FRESHERS"
                        details="Click here to get into the Freshers 2024"
                        button="Freshers"
                        image="https://shorturl.at/aU379"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="FAREWELL"
                        details="Click here to get into the Farewell 2024"
                        button="Farewell"
                        image="https://shorturl.at/ckEIO"
                        route="/events"
                        size="15rem"
                    />
                </div>
            </div>
            <center>
                <div className="heading">
                    <h2>
                        Events-2022
                    </h2>
                </div>
            </center>
            <div className="2022-card">
                <div className="cards">
                    <KitchenSinkExample
                        title="Vibgyor"
                        details="Click here to get into the Vibgyor 2024"
                        button="Vibgyor"
                        image="https://i.ytimg.com/vi/UG0dXefQRkU/maxresdefault.jpg"
                        route="/events"
                        size="15rem"

                    />
                    <KitchenSinkExample
                        title="AAGHAAZ"
                        details="Click here to get into the Aaghaaz 2024"
                        button="Aaghaaz"
                        image="https://shorturl.at/dMRU5"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="CHAKRAVYUH"
                        details="Click here to get into the Chakravyuh 2024"
                        button="Chakravyuh"
                        image="https://shorturl.at/ejmzH"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="DJ NIGHT"
                        details="Click here to get into the DJ Night 2024"
                        button="DJ Night"
                        image="https://shorturl.at/asHK2"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="FRESHERS"
                        details="Click here to get into the Freshers 2024"
                        button="Freshers"
                        image="https://shorturl.at/aU379"
                        route="/events"
                        size="15rem"
                    />
                    <KitchenSinkExample
                        title="FAREWELL"
                        details="Click here to get into the Farewell 2024"
                        button="Farewell"
                        image="https://shorturl.at/ckEIO"
                        route="/events"
                        size="15rem"
                    />
                </div>
            </div>
        </>

    )
}

export default Gallary