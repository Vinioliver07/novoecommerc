import { useEffect, useState } from "react";
import { Item } from "../Item";
import style from "./styles.module.css";

export function ItemList() {

  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProdutos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      },2000)
    })
  }

  const items = [
    {
      id: 1,
      title: 'Produto 1',
      price: "R$",
      image_url:''
    },
    {
      id: 2,
      title: 'Produto 2',
      price:"R$" ,
      image_url : ''
    },
    {
      id: 3,
      title: 'Produto 3',
      price :"R$ ",
      image_url : ''
    },
    {
      id: 4,
      title: "Produto 4",
      price: "R$",
      image_url: ''
    }

  ]

  useEffect(() => {
    fetchProdutos()
    .then(produtos => {
      setProdutos(produtos);
      setLoading(false);
    })
  }, [] );
  


  return (
    <>
        <div>
            <h1 className="title">Lista de Produtos</h1><br/>
        </div>
        {
          loading ? (<p className={style.loading}>Carregando Produtos...</p>) : (
            <Item items={produtos}/>
          )
        }
        

        
    </>
  )
}
