import React from 'react';
import { button, input } from '../tools';

const Search = () => {
    return (
        <div>
            <form>
                <div className="input-group">
                    <div className="form-outline w-75">
                        {input(
                            "search", 
                            "Search", 
                            "Search ...", 
                            "col-md-12", 
                            "form-control col-md-12"
                        )}
                    </div>
                    {button("", "fa fa-search", "btn btn-success")}
                </div>
            </form>
        </div>
    );
}
 
export default Search;