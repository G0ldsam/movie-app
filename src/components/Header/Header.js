import react,{useState} from "react";
import "./Header.css"

const Header = ({onSubmit}) => {

    const [term,setTerm] = useState('');

    const searchMovies=(searchValue)=>{
        setTerm(searchValue)
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
    }

    return(
        <div className="ui menuColor ">

            <div className="dimension ">
                <div className="ui transparent inverted input ">
                    <form onSubmit={onFormSubmit} >
                        <i className="search icon"></i>
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e)=>searchMovies(e.target.value)}
                            className="searchBar"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header