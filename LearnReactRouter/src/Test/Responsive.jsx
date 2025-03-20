const Responsive = () => {

    return (
        <div className="w-full h-[100vh] bg-slate-500">

            <nav className="w-full flex not-sm:justify-between justify-around bg-sky-400">
                <div>
                    Logo
                </div>
                <div className=" flex flex-wrap gap-5 not-sm:hidden">
                    <h2>HOME</h2>
                    <h2>ABOUT</h2>
                    <h2>CONTACT</h2>
                    <h2>LOGIN</h2>
                </div>
                <div className="not-sm:visible sm:hidden">
                    MENU
                </div>
            </nav>

        </div>
    )
}

export default Responsive;