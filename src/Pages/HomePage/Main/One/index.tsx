/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import style from './style.scss';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const One = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [primeval, setPrimeval] = useState('');
    const [m, setM] = useState('get');
    const [jsonV, setJsonV] = useState('');
    const [apiV, setApiV] = useState('');
    const [inputV, setInputV] = useState('');
    const { Option } = Select;

    useEffect(() => {
        const api = localStorage.getItem('api');
        const apiValue = localStorage.getItem('apiV');
        if (api) {
            setPrimeval(api);
            general(api);
        }
        if (apiValue) {
            setInputV(apiValue);
        }
        if (api && apiValue) {
            general(api, apiValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    function general(newValue: string, inputValue = '', m2 = '') {
        try {
            console.log('change', newValue);
            const json = JSON.parse(newValue);
            let jsonStr = '{\n';

            /** json */
            Object.keys(json).forEach((item) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                const jItem = json[item];
                if (typeof jItem === 'string') {
                    jsonStr += '\t' + item + ': string\n';
                }
                if (jItem instanceof Array) {
                    if (typeof jItem[0] === 'string') {
                        jsonStr += '\t' + item + ': Array<string>\n';
                    }
                    if (typeof jItem[0] !== 'string' && !isNaN(jItem[0])) {
                        jsonStr += '\t' + item + ': Array<number>\n';
                    }
                }
                if (typeof jItem === 'boolean') {
                    jsonStr += '\t' + item + ': boolean\n';
                }
                if (typeof jItem !== 'string' && !isNaN(jItem)) {
                    jsonStr += '\t' + item + ': number\n';
                }
            });
            jsonStr += '}';
            setJsonV(jsonStr);

            /** api  */
            let urlStr = 'xxxxxxxx';
            let method = m;
            if (inputV || inputValue) {
                urlStr = /api.*/.exec(inputValue || inputV)?.toString() || '';
            }
            if (m2) {
                method = m2;
            }
            let apiStr = 'export const xxxxx = (data: \n' + jsonStr;
            apiStr += '): Promise<AxiosResponse> => {\n';
            apiStr += '\treturn axios.request({\n';
            apiStr += "\t\tmethod: '" + method + "',\n";
            apiStr += "\t\turl:'/" + urlStr + "',\n";
            apiStr += '\t\tdata\n\t});\n};';
            setApiV(apiStr);

            /** action */
        } catch (error) {
            console.log('error');
        }
    }
    function onChange(newValue) {
        setPrimeval(newValue);
        general(newValue);
        localStorage.setItem('api', newValue);
    }

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.one_container}>
            <div className={style.one_left}>
                <div className={style.on_link}>
                    地址：
                    <Input
                        value={inputV}
                        onChange={(e) => {
                            setInputV(e.currentTarget.value);
                            general(primeval, e.currentTarget.value);
                            localStorage.setItem('apiV', e.currentTarget.value);
                        }}
                    />
                </div>
                <div>
                    请求参数：
                    <AceEditor
                        className={style.one_editor}
                        mode="java"
                        theme="github"
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        width="700px"
                        height="300px"
                        value={primeval}
                        onChange={onChange}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                        }}
                    />
                </div>
                <div>
                    生成json:
                    <AceEditor
                        className={style.one_editor}
                        mode="typescript"
                        theme="github"
                        value={jsonV}
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        width="700px"
                        height="200px"
                        onChange={onChange}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                        }}
                    />
                </div>
            </div>
            <div className={style.one_right}>
                <div className={style.one_select}>
                    <Select
                        defaultValue="get"
                        style={{ width: 120 }}
                        onChange={(value) => {
                            setM(value);
                            general(primeval, '', value);
                        }}
                    >
                        <Option value="get">get</Option>
                        <Option value="post">post</Option>
                        <Option value="delete">delete</Option>
                        <Option value="head">head</Option>
                        <Option value="options">options</Option>
                        <Option value="post">post</Option>
                        <Option value="put">put</Option>
                        <Option value="patch">patch</Option>
                        <Option value="purge">purge</Option>
                        <Option value="link">unlink</Option>
                    </Select>
                </div>
                <div>
                    生成api接口
                    <AceEditor
                        className={style.one_editor}
                        mode="typescript"
                        theme="github"
                        value={apiV}
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        width="700px"
                        height="300px"
                        onChange={onChange}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default One;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
