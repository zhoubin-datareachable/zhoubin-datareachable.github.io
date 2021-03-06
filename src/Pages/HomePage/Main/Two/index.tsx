/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState } from 'react';
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
const Two = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [primeval, setPrimeval] = useState('');
    const [actionStr, setActionStr] = useState('');
    const [reducerStr, setReducerStr] = useState('');
    useEffect(() => {
        const type = localStorage.getItem('type');
        if (type) {
            setPrimeval(type);
            general(type);
        }
    }, []);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    function general(newValue: string) {
        //=== action =====
        let actStr = '';
        // ????????????
        let annotation = '';
        annotation = /\/\*(\s|.)*?\*\//.exec(newValue)?.toString().slice(0, -2) || '';
        actStr += annotation + '\n';
        // ??????action Name
        let actionName = /interface\s[\dA-z]*/.exec(newValue)?.toString() || '';
        actionName = actionName.replace(/interface/, 'const');
        // ????????????
        let parameter = /payload\s*:\s*{[a-zA-Z\s*:<>;]*};/.exec(newValue)?.toString() || '';
        parameter = parameter
            .replace('payload: {', '')
            .replace('};', '')
            .trim()
            .replace(';', '')
            .replace('<', '<types.');
        // ??????payload
        let payload = parameter.split(':')[0];
        if (payload.trim()) {
            payload = `\n\t\tpayload: {\n\t\t\t${payload}\n\t\t},`;
        } else {
            payload = '';
        }
        // ??????type
        let type = /type:\s*typeof\s*[a-zA-Z_]*/.exec(newValue)?.toString() || 'payload';
        type = type.replace(/type:\s*typeof/, '').trim();

        actStr += actionName;
        actStr += ` = (${parameter}): types.xxxxAction => {\n`;
        actStr += `\treturn {\n\t\ttype: types.${type},${payload}\n\t}\n};`;
        setActionStr(actStr);
        // ====reducer====
        let reducerStr = `case types.${type}: {\n`;
        reducerStr += `\treturn { ...state, ${payload}: [...actions.payload.${payload}] \n};`;
        setReducerStr(reducerStr);
    }
    function onChange(newValue) {
        setPrimeval(newValue);
        general(newValue);
        localStorage.setItem('type', newValue);
    }

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.two_container}>
            <div className={style.two_left}>
                <div>
                    type???
                    <AceEditor
                        className={style.two_editor}
                        mode="java"
                        theme="github"
                        value={primeval}
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
                <div>
                    action???
                    <AceEditor
                        className={style.two_editor}
                        mode="java"
                        theme="github"
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        value={actionStr}
                        width="700px"
                        height="305px"
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
            <div className={style.two_right}>
                <div>
                    reducer???
                    <AceEditor
                        className={style.two_editor}
                        mode="java"
                        theme="github"
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        width="700px"
                        height="300px"
                        value={reducerStr}
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
export default Two;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
