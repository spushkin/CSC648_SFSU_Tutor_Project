import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("3.101.225.46/getTutors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject : "Physics",
                searchText: "abc"
              })
        })
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <Fragment>
            <div className="searchBar">
                <table className="tableStyle">
                    <tr>
                        <td width="15%" className="dropDownBox">
                            <select name="filters" id="subject" className="dropDownMenu">
                                <option value="all">All</option>                                    <option value="math">Maths</option>
                                <option value="physics">Physics</option>
                                <option value="history">History</option>
                            </select>
                        </td>
                        <td width="100%"><input size="37" className="centerSearchBar" type="text" placeholder="           Search for class (e.g. CSC-648)" name="search" value={input} ></input></td>
                        <td width="15%"><div className="searchButton"><button className="goButton" onClick={(e) => handleChange(e.target.value)}>Go</button></div></td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}

export default SearchBar;