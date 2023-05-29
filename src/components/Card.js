import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div key={props.character.id}>
            <Link to={`/character/${props.id}`}>
                <img src={props.character.images.main} width="250" height="300" alt={props.character.name.first + ' ' + props.character.name.last} />
            </Link>
            <div>
                {props.character.name.first + " " + props.character.name.middle + " " + props.character.name.last}
            </div>
        </div>
    )
}

export default Card;