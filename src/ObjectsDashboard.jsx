import { Outlet, useNavigate } from "react-router"

export function ObjectDashBoard() {

    const navigate = useNavigate();

    return (

        <div>


            <div className="row col-12 justify-content-center">

                <h1>
                    Objects displayed
                </h1>

            </div>
            <div className="row col-12 justify-content-center">
                <Outlet/>
            </div>


        </div>



    )

}