import { Link } from 'react-router-dom';

function Card(props){
    return (
        <div>
            <Link to={`/character/${props.id}`}>
                <img src={props.character.PicUrl} width="250" height="300" alt={props.character.Name} />
            </Link>
            <div>
                {props.character.Name}
            </div>
        </div>
    )
}

export default Card;