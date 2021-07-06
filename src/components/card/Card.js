import stylesCard from './card.module.css';

function Card({ data }) {
    return (
        <div className={stylesCard.card_div}>
            <h1>{data.name}</h1>
            <img src={data.img} />
            <table className={stylesCard.table}>
                <tr className={stylesCard.border_bottom}>
                    <td>STATUS</td>
                    <td>{data.status}</td>
                </tr>
                <tr className={stylesCard.border_bottom}>
                    <td>NICKNAME</td>
                    <td>{data.nickname}</td>
                </tr>
                <tr className={stylesCard.border_bottom}>
                    <td>CATEGORY</td>
                    <td>{data.category}</td>
                </tr>
                <tr className={stylesCard.border_bottom}>
                    <td>OCCUPATION</td>
                    <td>{data.occupation[0]}</td>
                </tr>
            </table>
        </div>
    )
}

export default Card;
