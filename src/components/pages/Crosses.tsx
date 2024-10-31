// @flow
import * as React from 'react';
import {Outlet} from "react-router-dom";

export const Crosses = () => {
    return (
        <div>
            <div>Header</div>
            <Outlet/>
            <div>Footer</div>
        </div>
    );
};