import React from "react";
import "../../App.css"
import icon from "../../system/images/icon.jpg"
function Feed(){
    return (
        <div className="container">
            <div className="post">
                <div className="posterinfo">
                    <img id="profilpost" src={icon} alt="Photo de profil" />
                    <span>Herimanana</span>
                    <div className="time">
                        <span>2h</span>
                    </div>
                    <div className="dropdown">
                    </div>
                </div>
                <div className="content">

                    <div className="reactions">

                    </div>
                </div>
                <div className="actions">

                </div>
            </div>
        </div>
    )
}

export default Feed