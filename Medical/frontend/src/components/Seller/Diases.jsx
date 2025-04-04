import { useLocation } from "react-router-dom"

export default function Diases(){
        // const name = name;
        const location = useLocation();
        console.log("Header Data : ",location.state)
        console.log("Header Page")
    return (
        <div>
            <div>This is Daises Page</div>
            <div>
               <table>
                <tr>
                    <td><h2>Diases : {location.state.diases}</h2></td>
                    {/* <td>age</td> */}
                </tr>
               </table>
            </div>
        </div> 
    )
}