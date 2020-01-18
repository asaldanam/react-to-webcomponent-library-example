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
import React from 'react';

const SearchResultItem = props => {
    let {item} = props;
    return (
        <div className="item__root">
            <a className="item__images" href="#">
                <img
                    width="300"
                    height="372"
                    className="item__image"
                    src={item.small_image.url}
                    alt={item.name}
                />
            </a>
            <a className="item__name">{item.name}</a>
            <div className="item__price">{`${
                item.price.regularPrice.amount.currency
            } ${item.price.regularPrice.amount.value}`}</div>
        </div>
    );
};

export default SearchResultItem;
