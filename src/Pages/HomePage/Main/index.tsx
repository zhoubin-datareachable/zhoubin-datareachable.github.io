/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Redirect, Route } from 'react-router-dom';
import One from './One';
import Two from './Two';
import Three from './Three';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Main = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <Redirect path="/" to="/1" />
            <Route path="/1" exact component={One} />
            <Route path="/2" exact component={Two} />
            <Route path="/3" exact component={Three} />
        </Row>
    );
};
export default Main;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
