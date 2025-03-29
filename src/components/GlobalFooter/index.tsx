import React from 'react';
import {DefaultFooter} from '@ant-design/pro-layout';
import {GithubOutlined} from '@ant-design/icons';
import {HENU_BLOG, HENU_TITLE, MOTTO, STEPHEN_DEFAULT_MESSAGE} from '@/constants';

/**
 * 全局底部栏组件
 * @constructor
 */
const GlobalFooter: React.FC = () => {
	const defaultMessage = STEPHEN_DEFAULT_MESSAGE;
	const currentYear = new Date().getFullYear();
	return (
			<DefaultFooter
					className={'global-footer'}
					copyright={`${defaultMessage} ${currentYear}`}
					links={[
						{
							key: 'Blog',
							title: HENU_TITLE,
							href: HENU_BLOG,
							blankTarget: true
						},
						{
							key: 'Github',
							title: <GithubOutlined/>,
							href: HENU_BLOG,
							blankTarget: true
						},
						{
							key: 'motto',
							title: MOTTO,
							href: HENU_BLOG,
							blankTarget: true
						}
					]}
			/>
	);
};

export default GlobalFooter;
