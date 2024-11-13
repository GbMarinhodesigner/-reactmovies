import { useEffect } from "react";
import { getData } from "../api/tmdb"
import { useState } from "react";

import { BarLoader } from "react-spinners";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export function List({ categoria }) {
    // Criando o estado, iniciando com um array vazio 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [ordem, setOrdem] = useState('popular');
    const options = categoria == 'filmes' ? [
        { value: 'popular', label: 'Popular'},
        { value: 'top_rated', label: 'Os melhores'},
        { value: 'upcoming', label: 'Em breve'},
        { value: 'now_playing', label: 'Em cartaz '},
    ] : [
        { value: 'popular', label: 'Popular'},
        { value: 'top_rated', label: 'Melhores séries'},
        { value: 'on_the_air', label: 'No ar'},

    ]

    async function loadItems() {
        //const data = await getData(categoria); //Aciona a API
        //setItems(data); //Guarda os dados API em um estado
        setLoading(true);

        try {
            const data = await getData(categoria, page, ordem);
            setItems(data);

            setTimeout(() => {
                setLoading(false);

                setLoading(false); // desabilita o loading
            }, 500)

        }

        catch (error) {
            console.log('Error ao buscar dados' + error)


        }

    }


    function handleOrder(ordem) {
        setOrdem(ordem);
        setPage(1);


    }


    // Função especial que é executada ao fim de=a renderização do componente 
    useEffect(() => {
        loadItems();

        sessionStorage.setItem ('page',page.toString())
       
    }, [page, ordem]);



    if (loading) {
        return (
            <BarLoader
                color='#00B1E9'
                width={'100%'} />
        )
    }
    return (
        <>
            <div className="max-w-container-site  mx-auto">
                <div className="flex justify-between mt-3 ">
                    <div>
                        <select value={ordem} onChange={(e) => handleOrder(e.target.value)} className=" w-32 border py-1 px-3 bg-brand-blue-dark ">
                           {
                            options.map((item)=> 
                                <option value={item.value} >{item.label}</option>
                            
)
                           }
                         
                        </select>

                    </div>
                    <Pagination page={page} setPage={setPage} />
                </div>

                <div className="flex flex-wrap justify-center gap-5 my-16">
                    {
                        items.map(item => (
                            <Card item={item} categoria={categoria} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}