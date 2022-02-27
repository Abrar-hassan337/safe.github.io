import React from 'react';
import ReactDOM from 'react-dom';
import mountSearchMask from './mountSearchMask';

import './searchMaskDependencies.scss';

if (typeof window !== "undefined") {
    window.mountSearchMask = mountSearchMask;
    window.React = React;
    window.ReactDOM = ReactDOM;
}