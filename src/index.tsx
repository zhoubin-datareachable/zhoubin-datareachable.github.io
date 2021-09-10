import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './Route';
import 'antd/dist/antd.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './Locales/i18n';
import './global.css';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <RootRouter />
    </I18nextProvider>,
    document.getElementById('root'),
);
