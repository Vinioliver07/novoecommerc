import style from "./styles.module.css";
// eslint-disable-next-line react/prop-types
export function Item({ items }) {

    console.log(items);
    return (
        <>
            <div className={style.container}>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item =>
                        <div className={style.content} key={item.id}>
                            <ul className={style.card}>
                                <li><img src={item.image} /></li>
                                <li>{item.title}</li>
                                {/* <li>{item.description}</li> */}
                                <li><button>Mais detalhes</button>{item.button}</li>
                                <li>{item.price}</li>
                                <li>Restam somente {item.estoque}</li>
                               
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}
