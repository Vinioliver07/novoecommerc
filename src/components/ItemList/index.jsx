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
            titulo: 'Camisa Mc Nova Paraty',
            preco: "R$299,99",
            img: 'https://lojausereserva.vtexassets.com/arquivos/ids/7626474-600-auto?v=638182324950470000&width=600&height=auto&aspect=true'
        }, {
            id: 2,
            titulo: 'Camisa Mc Tricot Rede',
            preco: "R$ 285,99",
            img: 'https://lojausereserva.vtexassets.com/arquivos/ids/7220575-600-auto?v=638044032712900000&width=600&height=auto&aspect=true'
        }, {
            id: 3,
            titulo:: 'Camisa Mc Estampada',
            preco: "R$ 299,99",
            img: 'https://lojausereserva.vtexassets.com/arquivos/ids/7855116-600-auto?v=638228063419670000&width=600&height=auto&aspect=true'
        }, {
            id: 4,
            titulo: 'Camisa Mc Estampada',
            preco: "R$ 139,99",
            img: 'https://lojausereserva.vtexassets.com/arquivos/ids/7077748-1200-auto?v=637941229534030000&width=1200&height=auto&aspect=true'
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
