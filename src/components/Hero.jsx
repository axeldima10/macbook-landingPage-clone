import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate=2;

    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title"/>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
            {/* to modify some other video properties, we have to attach a ref to this
            Whenever we want to have more control over a specific video, we attach it to a ref*/}
            <button>Acheter</button>
            <p>A partir de $1 699 ou $133/mois pendant 12 mois</p>

        </section>
    )
}
export default Hero
