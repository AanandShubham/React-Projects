import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function Diases() {
    // const name = name;
    const location = useLocation();
    console.log("Diases Header Data  : ", location.state)
    console.log("Header Page")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = e.target.elements;
        const medicineDetails = {
            mname:data.mname.value,
            mfd:data.mfd.value,
            exp:data.exp.value,
            rate:data.rate.value,
            discount:data.discount.value,
            qty:data.qty.value,
            type:data.type.value
        }

        const addData={
            shopname:location.state.shopname,
            did:location.state.did,
            medicin:medicineDetails
        }

        console.log("Medicine Data :- ",addData);

        fetch('http://localhost:3000/addMedicine/',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(addData)
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status === 'added'){
                setShowDialog(false)
                getMedicines();
            }
            console.log("Add Response : ",res);
            
            return res;
        })
    }

    const getMedicines = () => {
        fetch('http://localhost:3000/getMedicines/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shopname: location.state.shopname, did: location.state.did })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 'ok'){
                    setMedicin(res.medicine[0]);
                    console.log("Medicines : ",res)
                } 
                console.log(res.medicine[0][0].mfg.split('T')[0])
                

                return res;
            })
    }

    useEffect(() => {
        getMedicines();
    },[location.state.did])

    const [showDialog, setShowDialog] = useState(false)
    const [medicin, setMedicin] = useState([{ mid: 1234, mname: 'dolo', mfg: '12/2/2024', expr: '13/4/2026', qty: 34, prtRate: 34, discRate: 23, orgRate: 21, disease: '32', descr: 'tablet' }])


    return (
        <div>
            <header className="w-full h-[5vh] p-2 bg-amber-100 flex items-center justify-center">
                <h1 className="">{location.state.dname} </h1>

            </header>
            <button onClick={() => setShowDialog((prev) => !prev)} className="bg-amber-200 p-2 rounded-xl absolute top-[87vh] left-[90vw]">Add</button>
            <main className="w-full h-[79vh] bg-neutral-500">
                <ul className="w-full h-fit flex flex-col gap-1.5 ">

                    <li className="flex bg-neutral-400 justify-between items-center">
                        <h1>Name</h1>
                        <h1>MFD</h1>
                        <h1>EXPR</h1>
                        <h1>PRT Rate</h1>
                        <h1>DIS Rate</h1>
                        <h1>ORG Rate</h1>
                        <h1>QTY</h1>
                        <h1>DESC</h1>
                    </li>
                    {/* Showing Medicines  */}
                    {
                    
                        medicin?.map((items) => <li className="flex bg-[#89b86b] justify-between items-center">
                            <h1>{items.mname}</h1>
                            <h1>{items.mfg.split('T')[0]}</h1>
                            <h1>{items.expr.split('T')[0]}</h1>
                            <h1>{items.rate}</h1>
                            <h1>{items.discont} %</h1>
                            <h1>{(items.rate - eval((items.rate * items.discont) /100)).toFixed(2)} /rs </h1>
                            <h1>{items.qty}</h1>
                            <h1>{items.descr}</h1>
                        </li>)
                    }
                </ul>

                {/* <AddMedicineDialog showDialog={showDialog} setShowDialog={setShowDialog} /> */}

                {/* dialog Box  */}
                <div className={`dialog ${showDialog ? '' : 'hidden'}  absolute top-[13vh] left-4 w-[97vw] flex justify-center items-center h-full bg-[#1f1c1ce0]`}>
                    <div className=' w-fit ml-3 mr-3 h-fit border-2 rounded-xl bg-neutral-500 '>

                        <div className='w-full border-b-2 flex justify-end'>
                            <button onClick={() => setShowDialog(false)} className=' w-full flex justify-between items-center '>
                                <h1 className='w-full text-center font-bold text-[#9bdae5]'>Add Medicines</h1>
                                <img
                                    className='w-[40px] h-[35px] rotate-45 hover:bg-amber-200 rounded-4xl'
                                    src="../src/images/add_btn.png" alt="" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className='w-fit h-fit p-2 flex flex-col items-center gap-6 mt-[40px] text-[1.5vh]1 justify-center'>
                            {/* <div className="w-full flex justify-around">
                                <label htmlFor="">Name</label>
                                <label htmlFor="">MFD</label>
                                <label htmlFor="">EXPR</label>
                                <label htmlFor="">RATE</label>
                                <label htmlFor="">DISCOUNT</label>
                                <label htmlFor="">QTY</label>
                                <label htmlFor="">TYPE</label>
                            </div> */}
                            <div className="w-fit flex  flex-col justify-around">
                                <input className="text-center border-2 border-amber-100 rounded-xl p-1 outline-0" type="text" placeholder='name' name='mname' />
                                <input className="border-2 border-amber-100 rounded-xl p-1 outline-0" type="date" name="mfd" />
                                <input className="border-2 border-amber-100 rounded-xl p-1 outline-0" type='date' name='exp' />
                                <input className="text-center border-2 border-amber-100 rounded-xl p-1 outline-0" type="text" name='rate' placeholder="Rate" />
                                <input className="text-center border-2 border-amber-100 rounded-xl p-1 outline-0" type="text" name="discount" placeholder="Discount" />
                                <input className="text-center border-2 border-amber-100 rounded-xl p-1 outline-0" type="text" name="qty" placeholder="Qty" />
                                <select className="border-2 border-amber-100 rounded-xl p-1 outline-0" name="type" id="">
                                    <option value="TABLET">TABLET</option>
                                    <option value="SYRUP">SYRUP</option>
                                    <option value="INJECTION">INJECTION</option>
                                </select>
                            </div>
                                <input className="border-2 border-amber-100 rounded-xl p-1 outline-0" type="submit" value="Add" />
                        </form>
                    </div>
                </div>

            </main>

        </div>
    )
}