import axios from "axios"
import { useState } from "react"

export function ObjectAdd() {


    const url = "https://api.restful-api.dev/collections/products/objects"

    const [name,setName] = useState("")
    const [year,setYear] = useState("")
    const [price,setPrice] = useState("")
    const [cpu, setCPU] = useState("")
    const [msg,setMsg] = useState("")

    const resp = async (e) => {

        e.preventDefault();

        const dto = {
            "name": name,
            "data": {
                "Year": year,
                "Price": price,
                "CPU": cpu
            }
        }

        try {

            const list = await axios.post(url, dto,{
                headers:{"x-api-key": "53472f04-e06e-4b1c-a338-97ba6ce32753"}
            })
            console.log(list.data)
            setMsg("Created")

        }catch (error) {
            console.log("Status:", error.response?.status);
            console.log("Message:", error.response?.data);
            console.log("Allowed methods:", error.response?.headers?.allow);
        }

    }

    return (

        

        <div className="container col-7">

            {msg}
            <h3>Add Product </h3>
            <form onSubmit={(e) => resp(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-4">
                            <label>Name</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label>Year</label>
                            <input type="number" className="form-control"
                                onChange={(e) => setYear(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label>Price</label>
                            <input type="number" className="form-control"
                                onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label>CPU</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setCPU(e.target.value)} />
                        </div>
                        <div className="mt-4">

                            <button type="submit" className="btn btn-primary" >
                                Create
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>


    );


}