/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import { useHistory } from 'react-router';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Sidebar = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const history = useHistory();
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                style={{ width: '200px', height: 'calc(100vh - 50px)', backgroundColor: '#333645' }}
                onSelect={(p) => {
                    history.push(`/${p.key}`);
                }}
            >
                <Menu.Item key="1">生成API接口</Menu.Item>
                <Menu.Item key="2">生成ACTION</Menu.Item>
                <Menu.Item key="3">SVG</Menu.Item>
            </Menu>
        </Row>
    );
};
export default Sidebar;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
