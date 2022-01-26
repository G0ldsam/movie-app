import "./Card.css"
import React from "react";
import defaultImage from "../../images/default.PNG";

const Card = ({ key,image,date,title,description }) => {
    const path = image ? `https://image.tmdb.org/t/p/w500`+image : defaultImage;
    // const path =`https://image.tmdb.org/t/p/w500`+image;
    return (


        // <div className="ui card" style={{maxWidth:'100%' , minHeight:'100%'}}>
        //     <div className="content" style={{padding: 0}}>
        //         <div className="ui items">
        //             <div className="ui card">
        //                 <div className="ui large image">
        //                     <img src="https://picsum.photos/300/300"/>
        //                 </div>
        //                 <div className="content" style={{padding:20}}>
        //                     <a className="header">12 Years a Slave</a>
        //                     <div className="date">
        //                         <span className="date">2020-01-05</span>
        //                     </div>
        //                     <div className="description">
        //                         <p>jsdfksfdbajkadasddsfajskdnasxasasxa</p>
        //                     </div>
        //                     <div className="extra">
        //                         <div className="ui label">Action</div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="flex-container zoom " >
            <div className="image" >
                <img src={path} className="imageFit"/>
            </div>
            <div className="content">
                <p><a className="header  details-header words">{title}</a></p>
                <div className="date details">
                    <span className="date">Release Date: {date}</span>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card