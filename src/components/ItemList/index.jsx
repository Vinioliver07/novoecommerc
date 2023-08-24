import {useEffect, useState} from "react";
import {Item} from "../Item";
import style from "./styles.module.css";

export function ItemList() {

    const [produtos, setProdutos] = useState();
    const [loading, setLoading] = useState(true);

    const fetchProdutos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(items);
            }, 2000)
        })
    }

    const items = [
        {
            id: 1,
            title: 'Camisa Mc ',
            description:'Nova Paraty ',
            price: "R$299,99",
            estoque:5,
            image: 'https://lojausereserva.vtexassets.com/arquivos/ids/7626474-600-auto?v=638182324950470000&width=600&height=auto&aspect=true'
        }, {
            id: 2,
            title: 'Camisa Mc ',
            description:'Tricot Rede',
            price: "R$ 285,99",
            estoque:6,
            image: 'https://lojausereserva.vtexassets.com/arquivos/ids/7220575-600-auto?v=638044032712900000&width=600&height=auto&aspect=true'
        }, {
            id: 3,
            title: 'Camisa Mc',
            description:'Estampada',
            price: "R$ 299,99",
            estoque:3,
            image: 'https://lojausereserva.vtexassets.com/arquivos/ids/7855116-600-auto?v=638228063419670000&width=600&height=auto&aspect=true'
        }, {
            id: 4,
            title: 'Camisa ',
            description:' lisa Verão',
            price: "R$ 139,99",
            estoque:2,
            image: 'https://lojausereserva.vtexassets.com/arquivos/ids/7077748-1200-auto?v=637941229534030000&width=1200&height=auto&aspect=true'
        },
    ]

    useEffect(() => {
        fetchProdutos().then(produtos => {
            setProdutos(produtos);
            setLoading(false);
        })
    }, []);


    return (
        <>
            <div>
                <h1 className="title">Lista de Produtos</h1><br/>
            </div>
            {
            loading ? (
                <p className={
                    style.loading
                }>Loading...</p>
            ) : (
                <Item items={produtos}/>
            )
        } </>
    )
}
