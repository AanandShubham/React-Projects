import { Link } from "react-router-dom"
import QuotesCard from "../Card/QuotesCard";
import ActionsCard from "../Card/ActionsCard";
const Home = () => {
    return (
        <div className="w-full h-full bg-gradient-to-rb from-[#f0efea] to-[#eb4c21]">
            <main
                className="w-full h-[70vh] flex  p-2 gap-2 ">
                <div className="w-1/2 h-full ">
                    <img
                        className="mix-blend-color-burn hover:scale-105 "
                        // style={{filter:"drop-shadow(1px 1px 20px yellow"}}
                        src="./src/images/doctor_anime.jpg" alt=""
                    />
                </div>
                <div className="w-fit h-full flex justify-evenly  flex-col items-center ">

                    <p className="w-[500px] p-4 font-serif rounded-2xl text-2xl shadow-2xl shadow-green-200"> "<b>Sleep</b>"  is the most important 'repair' machanism our body has, and getting enough of it will ensure you're feeling fit and energized the next day.</p>

                    <h2 className="-mt-20 ml-40 text-2xl"><b>Unknown</b></h2>
                </div>
            </main>

            <section className="w-full h-fit flex-wrap flex mt-10 justify-evenly p-4">

                <QuotesCard
                    quotes={"Physical fitness is not only one of the most important keys to a healthy body , it is the badic of dynamic and creative intellectual activity ."}
                    writer={"-John F. Kennedy"}
                />

                <QuotesCard
                    quotes={"What most people don't realize is that food is not just calories: it's information. It actually contains messages that communicate to every cell in the body ."}
                    writer={"-Dr. Mark Hyman"}
                />

                <QuotesCard
                    quotes={"Sorry . There's no magic bullet . You gotta eat healthy and live healthy to be healthy and look healthy . End of story ."}
                    writer={"-Morgan Spurlock"}
                />

                <QuotesCard
                    quotes={"People who laugh actually live longer than those who don't laugh . Few persons realize that health actually varies according to the amount of laughter"}
                    writer={"-James J. Walsh"}
                />
            </section>

            <section className="w-full h-fit flex justify-between gap-4 pb-16 mt-10  p-4">

                <ActionsCard  header={"Services"} content={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, incidunt ex. Nulla placeat expedita ratione debitis reiciendis eius esse obcaecati numquam! Est tempora accusantium porro, animi hic magni ducimus. Animi?"} link={"/Contact"}/>

                <ActionsCard  header={"About"} content={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, incidunt ex. Nulla placeat expedita ratione debitis reiciendis eius esse obcaecati numquam! Est tempora accusantium porro, animi hic magni ducimus. Animi?"} link={"/About"}/>

                <ActionsCard  header={"Contact"} content={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, incidunt ex. Nulla placeat expedita ratione debitis reiciendis eius esse obcaecati numquam! Est tempora accusantium porro, animi hic magni ducimus. Animi?"} link={"/Contact"}/>

            </section>


        </div>

    );
}

export default Home;


