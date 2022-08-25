import photoGrid from "../assets/img/photo-grid.png";

export default function Upper(){

    return (

        <section className="upper">
            <img src={photoGrid} className="upper-logo" alt="photogrid-logo" />
            <h3 className="upper-header">Online Experiences</h3>
            <p className="upper-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

