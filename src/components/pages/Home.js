import React, {useState} from 'react';
import MainPageLayout from "../MainPageLayout";
import {apiGET} from "../../misc/config";

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);


    const onInputChange = ev => {
        setInput(ev.target.value);

    }

    const onSearch = () => {
        apiGET(`/search/shows?q=${input}`).then(result=>{
            setResults(result)
        })
        // https://api.tvmaze.com/search/shows?q=girls



    }
    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) { // 13 is the code for enter
            onSearch()
        }
    }

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>
        }
        if (results && results.length > 0) {
            return <div>{results.map(item => <div key={item.show.id}>{item.show.name}</div>)}</div>

        }

        return null;
    }

    return (

        <MainPageLayout>
            <input type="text"
                   onChange={onInputChange}
                   onKeyDown={onKeyDown}
                   value={input}/>
            <button type='button'
                    onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
