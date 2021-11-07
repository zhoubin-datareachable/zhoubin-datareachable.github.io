/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, message, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './style.scss';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Four = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [value, setValue] = useState('');

    useEffect(() => {
        const yaml_api = localStorage.getItem('yaml_api');
        if (yaml_api) {
            setValue(yaml_api);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.five_container}>
            <Upload
                accept=".yaml"
                method="post"
                action="http://1.116.80.174:5500/api/upload"
                onChange={(info) => {
                    type responseType = {
                        code: number;
                        data: string;
                        msg: string;
                    };
                    if (info.file.status === 'done') {
                        const data: responseType = info.file.response;
                        void message.success(data.msg);
                        setValue(data.data);
                        localStorage.setItem('yaml_api', data.data);
                    } else if (info.file.status === 'error') {
                        const data: responseType = info.file.response;
                        void message.error(data.msg ?? '文件格式不正确');
                    }
                }}
            >
                <Button>上传文件</Button>
            </Upload>
            <AceEditor
                className={style.three_editor}
                mode="typescript"
                theme="github"
                showGutter={false}
                wrapEnabled={true}
                fontSize={16}
                width="700px"
                height="700px"
                value={value}
                onChange={(value: string) => {
                    localStorage.setItem('yaml_api', value);
                }}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
        </div>
    );
};
export default Four;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
