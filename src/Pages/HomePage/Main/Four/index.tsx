/**
 * @file
 * @date 2021-08-26
 * @author admin
 * @lastModify admin 2021-08-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './style.scss';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Four = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [selectIcon, SetSelectIcon] = useState({
        icon: '🎨',
        title: ':art:',
        description: '改进代码的结构/格式。',
    });
    const [inputV, setInputV] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const emojis = [
        { icon: '🎨', title: ':art:', description: '改进代码的结构/格式。' },
        { icon: '⚡️', title: ':zap:', description: '提高性能。' },
        { icon: '🔥', title: ':fire:', description: '删除代码或文件。' },
        { icon: '🐛', title: ':bug:', description: '修复一个错误。' },
        { icon: '🚑️', title: ':ambulance:', description: '关键修补程序。' },
        { icon: '✨', title: ':sparkles:', description: '介绍新功能。' },
        { icon: '📝', title: ':memo:', description: '添加或更新文档。' },
        { icon: '🚀', title: ':rocket:', description: '部署东西。' },
        { icon: '💄', title: ':lipstick:', description: '添加或更新 UI 和样式文件。' },
        { icon: '🎉', title: ':tada:', description: '开始一个项目。' },
        {
            icon: '✅',
            title: ':white_check_mark:',
            description: '添加、更新或通过测试。',
        },
        { icon: '🔒️', title: ':lock:', description: '修复安全问题。' },
        { icon: '🔖', title: ':bookmark:', description: '发布/版本标签。' },
        {
            icon: '🚨',
            title: ':rotating_light:',
            description: '修复编译器/linter 警告。',
        },
        { icon: '🚧', title: ':construction:', description: '工作正在进行中。' },
        { icon: '💚', title: ':green_heart:', description: '修复 CI 构建。' },
        { icon: '⬇️', title: ':arrow_down:', description: '降级依赖项。' },
        { icon: '⬆️', title: ':arrow_up:', description: '升级依赖。' },
        { icon: '📌', title: ':pushpin:', description: '将依赖项固定到特定版本。' },
        {
            icon: '👷',
            title: ':construction_worker:',
            description: '添加或更新 CI 构建系统。',
        },
        {
            icon: '📈',
            title: ':chart_with_upwards_trend:',
            description: '添加或更新分析或跟踪代码。',
        },
        { icon: '♻️', title: ':recycle:', description: '重构代码。' },
        { icon: '➕', title: ':heavy_plus_sign:', description: '添加依赖项。' },
        { icon: '➖', title: ':heavy_minus_sign:', description: '删除依赖项。' },
        { icon: '🔧', title: ':wrench:', description: '添加或更新配置文件。' },
        { icon: '🔨', title: ':hammer:', description: '添加或更新开发脚本。' },
        {
            icon: '🌐',
            title: ':globe_with_meridians:',
            description: '国际化和本地化。',
        },
        { icon: '✏️', title: ':pencil2:', description: '修正错别字。' },
        { icon: '💩', title: ':poop:', description: '编写需要改进的糟糕代码。' },
        { icon: '⏪️', title: ':rewind:', description: '还原更改。' },
        {
            icon: '🔀',
            title: ':twisted_rightwards_arrows:',
            description: '合并分支。',
        },
        { icon: '📦️', title: ':package:', description: '添加或更新已编译的文件或包。' },
        { icon: '👽️', title: ':alien:', description: '由于外部 API 更改而更新代码。' },
        {
            icon: '🚚',
            title: ':truck:',
            description: '移动或重命名资源（例如：文件、路径、路由）。',
        },
        { icon: '📄', title: ':page_facing_up:', description: '添加或更新许可证。' },
        { icon: '💥', title: ':boom:', description: '引入重大变化。' },
        { icon: '🍱', title: ':bento:', description: '添加或更新资产。' },
        { icon: '♿️', title: ':wheelchair:', description: '提高可访问性。' },
        { icon: '💡', title: ':bulb:', description: '在源代码中添加或更新注释。' },
        { icon: '🍻', title: ':beers:', description: '醉酒写代码。' },
        { icon: '💬', title: ':speech_balloon:', description: '添加或更新文本和文字。' },
        {
            icon: '🗃️',
            title: ':card_file_box:',
            description: '执行与数据库相关的更改。',
        },
        { icon: '🔊', title: ':loud_sound:', description: '添加或更新日志。' },
        { icon: '🔇', title: ':mute:', description: '删除日志。' },
        {
            icon: '👥',
            title: ':busts_in_silhouette:',
            description: '添加或更新贡献者。',
        },
        {
            icon: '🚸',
            title: ':children_crossing:',
            description: '改善用户体验/可用性。',
        },
        {
            icon: '🏗️',
            title: ':building_construction:',
            description: '进行架构更改。',
        },
        { icon: '📱', title: ':iphone:', description: '从事响应式设计。' },
        { icon: '🤡', title: ':clown_face:', description: '嘲笑的东西。' },
        { icon: '🥚', title: ':egg:', description: '添加或更新复活节彩蛋。' },
        {
            icon: '🙈',
            title: ':see_no_evil:',
            description: '添加或更新 .gitignore 文件。',
        },
        { icon: '📸', title: ':camera_flash:', description: '添加或更新快照。' },
        { icon: '⚗️', title: ':alembic:', description: '进行实验。' },
        { icon: '🔍️', title: ':mag:', description: '改进搜索引擎优化。' },
        { icon: '🏷️', title: ':label:', description: '添加或更新类型。' },
        { icon: '🌱', title: ':seedling:', description: '添加或更新种子文件。' },
        {
            icon: '🚩',
            title: ':triangular_flag_on_post:',
            description: '添加、更新或删除功能标志。',
        },
        { icon: '🥅', title: ':goal_net:', description: '捕捉错误。' },
        { icon: '💫', title: ':dizzy:', description: '添加或更新动画和过渡。' },
        { icon: '🗑️', title: ':wastebasket:', description: '弃用需要清理的代码。' },
        {
            icon: '🛂',
            title: ':passport_control:',
            description: '处理与授权、角色和权限相关的代码。',
        },
        {
            icon: '🩹',
            title: ':adhesive_bandage:',
            description: '对非关键问题的简单修复。',
        },
        { icon: '🧐', title: ':monocle_face:', description: '数据探索/检查。' },
        { icon: '⚰️', title: ':coffin:', description: '删除死代码。' },
        { icon: '🧪', title: ':test_tube:', description: '添加失败的测试。' },
        { icon: '👔', title: ':necktie:', description: '添加或更新业务逻辑' },
    ];

    const getDate = () => {
        const date = new Date();
        const dateStr = `${date.getFullYear()}/${
            date.getMonth() <= 8 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1
        }/${date.getDay() <= 9 ? '0' + date.getDay().toString() : date.getDay()}`;
        return dateStr;
    };

    useEffect(() => {
        setCurrentDate(getDate());
    }, []);
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.emoji_container}>
            <span style={{ marginBottom: '15px' }}>
                <span style={{ marginRight: '10px' }}>{selectIcon.icon}</span>
                <Input
                    value={inputV}
                    onChange={(e) => setInputV(e.currentTarget.value)}
                    placeholder="请输入内容"
                    style={{ width: '300px' }}
                />
                <span style={{ marginLeft: '10px' }}>{getDate()}</span>
                <Button
                    style={{ marginLeft: '10px' }}
                    type="primary"
                    onClick={() => {
                        const copyStr = `${selectIcon.title} ${inputV} ${currentDate}`;
                        navigator.clipboard.writeText(copyStr).then(
                            function () {
                                void message.success('复制成功');
                            },
                            function () {
                                void message.success('复制失败');
                            },
                        );
                    }}
                >
                    复制
                </Button>
            </span>
            <div className={style.emoji}>
                {emojis.map((item, key) => (
                    <li key={key} onClick={() => SetSelectIcon(item)}>
                        <div>{item.icon}</div>
                        <div>
                            <span>{item.title}</span>
                            <span>{item.description}</span>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
};
export default Four;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
