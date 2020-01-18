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
 * This component renders a list of search results. The search term is extracted from the query string, i.e. http://localhost/whatever/search?q=ombre
 */
import React, {useEffect, useState} from 'react';
import {useQuery, useSearchParam} from '@magento/peregrine';

import SearchResultItem from './SearchResultItem';
import PRODUCT_SEARCH from './queries/ProductSearch.graphql';

const SearchResults = () => {
    // use the query parameter as a state value
    let [queryParam, setValue] = useState('');

    // extract the query parameter from the query string and put in the state
    useSearchParam({location: window.location, parameter: 'q', setValue});

    // the 'useQuery' hook provides us with a result and and some utility functions which we'll use below
    const [queryResult, queryApi] = useQuery(PRODUCT_SEARCH);
    const {resetState, runQuery, setLoading} = queryApi;
    // these are standard Apollo parameters
    const {data, error, loading} = queryResult;

    let message = '';
    if (loading) {
        message = `Loading...`;
    } else if (error) {
        message = `An error has occured`;
    } else if (!data) {
        message = `Do some searching`;
    } else if (data.products.items.length == 1) {
        message = `No results found`;
    } else {
        message = `${data.products.items.length} results found`;
    }
    // This is where the magic happens - the useEffect hook is called after the component has been rendered
    // and runs the query. Note that while rendering our variables are null (i.e. data);
    useEffect(() => {
        if (queryParam) {
            setLoading(true);
            console.log(`Running query...`);
            runQuery({variables: {inputText: queryParam}});
        } else {
            resetState();
        }
    }, [runQuery, setLoading, queryParam]);

    return (
        <article className="category__root">
            <div className="search__categoryTop">{message}</div>
            <section>
                <div className="gallery__root">
                    <div className="gallery__items">
                        {data &&
                            data.products.items.map(item => {
                                return (
                                    <SearchResultItem
                                        key={item.id}
                                        item={item}
                                    />
                                );
                            })}
                    </div>
                </div>
            </section>
        </article>
    );
};
export default SearchResults;
