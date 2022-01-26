import react from "react";
import Card from '../Card/Card'

const MovieList =({list})=>{
    
    return(

        <div className="ui container centered special cards">
           {list.map((listItem)=><Card key={listItem.id} 
                                    image={listItem.backdrop_path}
                                    date={listItem.release_date} 
                                    title={listItem.title}
                                    description={listItem.overview}
                                    />)}
        </div>
    );
}
export default MovieList;