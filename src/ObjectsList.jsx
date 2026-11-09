import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function ObjectList() {

    const url = "https://api.restful-api.dev/collections/products/objects"
    const [product, setProduct] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        const resp = async () => {

            try {

                const list = await axios.get(url, {
                    headers: {
                        "x-api-key": "53472f04-e06e-4b1c-a338-97ba6ce32753"
                    }
                });

                setProduct(list.data);
                console.log(list.data);
                console.log(list.status)

            } catch (error) {
                console.log(error);
            }

        };

        resp();

    }, []);
    const [cPage, setCPage] = useState(1);


    const item = 10;

    const totalPages = Math.ceil(product.length / item);

    const lastIndex = cPage * item;
    const firstIndex = lastIndex - item;

    const currentProducts = product.slice(firstIndex, lastIndex);


    const del = async (id) => {

        const durl = `https://api.restful-api.dev/collections/products/objects/"${id}`

        try {
            const resp = await axios.delete(durl, {
                headers: { "x-api-key": "53472f04-e06e-4b1c-a338-97ba6ce32753" }
            });

            console.log(resp.status);
            console.log(resp.data)

            setProduct(prev => prev.filter(pro => pro.id !== id));

        } catch (error) {
            console.log("Status:", error.response?.status);
            console.log("Message:", error.response?.data);
            console.log("Allowed methods:", error.response?.headers?.allow);
        }

    }


    return (

        <div className="row col-4 mt-2 d-flex justify-content-center">

            <div>
                <button className="btn btn-primary" onClick={() => navigate('add')}>Add</button>
            </div>

            {currentProducts.map((pro, index) =>

                <div key={index} className="card">
                    <div className="card-header">
                        {pro.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Id: {pro.id}
                        </li>
                        <li className="list-group-item">
                            Price: {pro.data?.Price ?? 0}
                        </li>

                        <li className="list-group-item">
                            Year: {pro.data?.Year ?? "N/A"}
                        </li>

                        <li className="list-group-item">
                            CPU: {pro.data?.CPU ?? "N/A"}
                        </li>
                        <button className="bt btn-danger" onClick={() => del(pro.id)}> delete</button>
                    </ul>
                </div>
            )

            }

            <div className="mt-4">

                <button className="btn btn-primary me-2" disabled={cPage === 1} onClick={() => setCPage(cPage - 1)}>
                    Previous
                </button>

                {Array.from({ length: totalPages }, (x, index) => (

                    <button key={index} onClick={() => setCPage(index + 1)}>
                        {index + 1}
                    </button>

                ))}

                <button className="btn btn-primary" disabled={cPage === totalPages || totalPages === 0} onClick={() => setCPage(cPage + 1)}>
                    Next
                </button>

            </div>

        </div>
    );

}