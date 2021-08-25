import React, {useState} from 'react';
import MainPageLayout from "../MainPageLayout";
import {apiGET} from "../../misc/config";

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows') // bedefualt it has shows.
    const isShowSearch = searchOption === 'shows'


    const onInputChange = ev => {
        setInput(ev.target.value);

    }

    const onSearch = () => {
        apiGET(`/search/${searchOption}?q=${input}`).then(result => {
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
            return results[0].show ? results.map(item => (
                <div key={item.show.id}>{item.show.name}</div>
            )) : results.map(item => (
                <div key={item.person.id}>{item.person.name}</div>
            ));

            // based on select button different results will show.
        }

        return null;
    }
    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    }

    return (

        <MainPageLayout>
            <input type="text"
                   placeholder="Search for something"
                   onChange={onInputChange}
                   onKeyDown={onKeyDown}
                   value={input}/>


            <div>
                <label htmlFor='show-search'>
                    shows
                    <input
                        id='show-search'
                        type="radio"
                        value='shows'
                        checked={isShowSearch}
                        onChange={onRadioChange}/>
                </label>

                <label htmlFor='actor-search'>
                    Actors
                    <input
                        id='actor-search'
                        type="radio"
                        value='people'
                        checked={!isShowSearch}
                        onChange={onRadioChange}/>
                </label>
            </div>
            <button type='button'
                    onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
