/*******************************************************************************
 *
 *      Copyright 2019 Adobe. All rights reserved.
 *      This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *      you may not use this file except in compliance with the License. You may obtain a copy
 *      of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *      Unless required by applicable law or agreed to in writing, software distributed under
 *      the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *      OF ANY KIND, either express or implied. See the License for the specific language
 *      governing permissions and limitations under the License.
 *
 *
 ******************************************************************************/

/**
 * This component renders a search box powered by the Magento Peregrine hooks.
 * Although this component does perform a search, it does that for the "Autosuggestions" list (not included here)
 */
import React, {useState, useEffect} from 'react';
import PRODUCT_SEARCH from './queries/ProductSearch.graphql';

import {useQuery} from '@magento/peregrine';

import './search.css';

const Search = () => {
    const [searchTerm, updateSearchTerm] = useState('');
    const [queryResult, queryApi] = useQuery(PRODUCT_SEARCH);

    const {data, error, loading} = queryResult;
    const {resetState, runQuery, setLoading} = queryApi;

    let message = '';
    if (error) {
        message = 'An error occurred while fetching results.';
    } else if (loading) {
        message = 'Fetching results...';
    } else if (!data) {
        message = 'Search for a product';
    } else if (!data.products.items.length) {
        message = 'No results were found.';
    } else {
        message = `${data.products.items.length} items`;
    }

    useEffect(() => {
        if (searchTerm) {
            setLoading(true), runQuery({variables: {inputText: searchTerm}});
        } else {
            resetState();
        }
    }, [runQuery, setLoading, searchTerm]);

    const style = {
        '--iconsBefore': 1,
        '--iconsAfter': 0
    };
    return (
        <div className="searchBar__root_open searchBar__root">
            <div className="searchBar__searchInner">
                <form
                    className="searchBar__form"
                    onSubmit={event => {
                        event.preventDefault();
                        window.location.href = `/content/venia/language-masters/en/search.html?q=${searchTerm}`;
                    }}>
                    <span className="fieldIcons__root">
                        <span className="fieldIcons__input" style={style}>
                            <input
                                value={searchTerm}
                                className="textInput__input field__input"
                                htmlFor="search-term"
                                type="text"
                                name="search-term"
                                onChange={event =>
                                    updateSearchTerm(event.target.value)
                                }
                            />
                        </span>
                        <span className="fieldIcons__before">
                            <span className="icon__root">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <line
                                        x1="21"
                                        y1="21"
                                        x2="16.65"
                                        y2="16.65"
                                    />
                                </svg>
                            </span>
                        </span>
                        <span className="fieldIcons__after" />
                    </span>
                    {message && <p className="message__root">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Search;
