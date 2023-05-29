import { useParams } from "react-router-dom";

function CardDetail(props) {
    const { id } = useParams();

    if (props.character[id]) {

        const { age, gender, homePlanet, images, name, occupation, species, sayings } = props.character[id];

        return (
            <div className="card_detail_container">
                <div className="card_detail_img">
                    <img src={images.main} alt={name.first + " " + name.last} />
                </div>
                <div className="card_detail_text">
                    <dl>
                        <dt>Name:</dt>
                        <dd>{name.first + " " + name.middle + " " + name.last}</dd>
                        <dt>Age:</dt>
                        {age ? <dd>{age}</dd> : <dd>unknown</dd>}
                        <dt>Gender:</dt>
                        {gender ? <dd>{gender}</dd> : <dd>unknown</dd>}
                        <dt>Species:</dt>
                        {species ? <dd>{species}</dd> : <dd>unknown</dd>}
                        <dt>Planet:</dt>
                        {homePlanet ? <dd>{homePlanet}</dd> : <dd>unknown</dd>}
                        <dt>Profession:</dt>
                        {occupation ? <dd>{occupation}</dd> : <dd>unknown</dd>}
                    </dl>
                    <div>
                        <span>Sayings:</span>
                        <ul>
                            {sayings.slice(0, 5).map((saying, index) => <li key={index}>{saying}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )

    } else {

        const characters = JSON.parse(sessionStorage.getItem("characters"));

        const { age, gender, homePlanet, images, name, occupation, species, sayings } = characters[id];

        return (
            <div className="card_detail_container">
                <div className="card_detail_img">
                    <img src={images.main} alt={name.first + " " + name.last} />
                </div>
                <div className="card_detail_text">
                    <div><span>Species: </span>{species}</div>
                    <div><span>Planet: </span>{homePlanet}</div>
                    <br />
                    <div><span>Name: </span>{name.first + " " + name.middle + " " + name.last}</div>
                    <div><span>Age: </span>{age}</div>
                    <br />
                    <div><span>Gender: </span>{gender}</div>
                    <br />
                    <div><span>Profession: </span>{occupation}</div>
                    <br />
                    <div>
                        <span>Sayings:</span>
                        <ul>
                            {sayings.slice(0, 5).map((saying, index) => <li key={index}>{saying}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default CardDetail;