/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import style from './style.scss';
import { Input } from 'antd';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Two = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [primeval, setPrimeval] = useState('');
    const [font, setFont] = useState('');
    const [inputV, setInputV] = useState('');
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    function firstToUpper(str: string) {
        if (str) {
            return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
        }
        return str;
    }
    function general(newValue: string, iconName = '') {
        try {
            const svg_container = document.getElementById('svg_container');
            if (svg_container) {
                svg_container.innerHTML = newValue;
            }
            // path
            const paths = /<path d=".*<\/path>/.exec(newValue)?.toString() || '';
            const pathArray = paths.split('</path>');
            let pathStr = '';
            for (let i = 0; i < pathArray.length; i++) {
                pathStr += pathArray[i]
                    .replace('<path d="', '')
                    .replace(/"\s*p-id=".*">/, '')
                    .trim();
            }

            // width height
            const viewBox = /viewBox="[0-9\s]*/.exec(newValue)?.toString() || '';
            const viewBoxArray = viewBox.replace('viewBox="', '').split(' ');
            const width = viewBoxArray[2];
            const height = viewBoxArray[3];

            // fontStr
            let fontStr = `const fa${firstToUpper(iconName)}: IconDefinition = {\n`;
            fontStr += `\tprefix: 'fas',\n\ticonName: '${iconName}' as IconName,\n\ticon: [\n`;
            fontStr += `\t\t${width},\n\t\t${height},\n\t\t[],\n\t\t'f055',\n\t\t'${pathStr}'\n\t],\n};`;

            setFont(fontStr);
        } catch (error) {
            console.log('error');
        }
    }
    function onChange(newValue) {
        setPrimeval(newValue);
        general(newValue);
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.three_container}>
            <div className={style.three_left}>
                <div className={style.on_link}>
                    图标名称：
                    <Input
                        onChange={(e) => {
                            setInputV(e.currentTarget.value);
                            general(primeval, e.currentTarget.value);
                        }}
                    />
                </div>
                <div>
                    svg
                    <AceEditor
                        className={style.three_editor}
                        mode="java"
                        theme="github"
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        width="1000px"
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
                    fontAwesome
                    <AceEditor
                        className={style.three_editor}
                        mode="java"
                        theme="github"
                        showGutter={false}
                        wrapEnabled={true}
                        fontSize={16}
                        width="1000px"
                        height="300px"
                        value={font}
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
                <div id="svg_container"></div>
            </div>
        </div>
    );
};
export default Two;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
