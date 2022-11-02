import React, { useEffect, useState } from "react";

export const Main = () => {


    const [value, setValue] = useState('')

    useEffect(() => {
      let val =  localStorage.getItem('key')
        setValue(val)

    }, [])






    return (
        <div className="main">
            <div className="row">
                <div className="search_input_c">
                    <input type={"text"} className="input" placeholder="Search" />
                    <div className="search_icon_c">Search here sir</div>
                </div>

                <div className="button_outline">
                    <div onClick={()=>{
                        localStorage.setItem('key' , 'Mohit')
                        setValue('Mohit')
                    }} >Add Patients </div>
                </div>
            </div>

            <div className="row">
                <div className="color_container">
                    <div className="white_text_title">Hi, { value }</div>
                    <div className="white_text_subtitle">You've been doing your whole work plan for the last two months. Way to go</div>
                </div>
            </div>
            




        </div>
    );
};
