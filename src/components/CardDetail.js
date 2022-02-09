import { useParams } from "react-router-dom";

function CardDetail(props){
    const { id } = useParams();

    if(props.character[id]){

        const { Name, Age, FirstAppearance, PicUrl, Planet, Profession, Relatives, Species, Status, VoicedBy } = props.character[id];

        return (
            <div className="card_detail_container">
                <div className="card_detail_img">
                    <img src={PicUrl} alt={Name} />
                </div>
                <div className="card_detail_text">
                    <div><span>Species: </span>{Species}</div>
                    <div><span>Planet: </span>{Planet}</div>
                    <br />
                    <div><span>Name: </span>{Name}</div>
                    <div><span>Age: </span>{Age}</div>
                    <br />
                    <div><span>Relatives: </span>{Relatives}</div>
                    <br />
                    <div><span>Profession: </span>{Profession}</div>
                    <br />
                    <div><span>FirstAppearance: </span>{FirstAppearance}</div>
                    <div><span>Status: </span>{Status}</div>
                    <div><span>VoicedBy: </span>{VoicedBy}</div>
                </div>
            </div>
        )

    } else {

        const characters = JSON.parse(sessionStorage.getItem("characters"));

        const { Name, Age, FirstAppearance, PicUrl, Planet, Profession, Relatives, Species, Status, VoicedBy } = characters[id];

        return (
            <div className="card_detail_container">
                <div className="card_detail_img">
                    <img src={PicUrl} alt={Name} />
                </div>
                <div className="card_detail_text">
                    <div><span>Species: </span>{Species}</div>
                    <div><span>Planet: </span>{Planet}</div>
                    <br />
                    <div><span>Name: </span>{Name}</div>
                    <div><span>Age: </span>{Age}</div>
                    <br />
                    <div><span>Relatives: </span>{Relatives}</div>
                    <br />
                    <div><span>Profession: </span>{Profession}</div>
                    <br />
                    <div><span>FirstAppearance: </span>{FirstAppearance}</div>
                    <div><span>Status: </span>{Status}</div>
                    <div><span>VoicedBy: </span>{VoicedBy}</div>
                </div>
            </div>
        )
    }
    
}

export default CardDetail;