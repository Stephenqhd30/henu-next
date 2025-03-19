import React from "react";
import { DefaultFooter } from "@ant-design/pro-layout";
import {GithubOutlined, GitlabOutlined} from '@ant-design/icons';
import {
  GITHUB,
  GITLAB,
  AUTHOR_TITLE,
  STEPHEN_BLOG,
  STEPHEN_DEFAULT_MESSAGE,
} from "@/constants";

/**
 * 全局底部栏组件
 * @constructor
 */
const GlobalFooter: React.FC = () => {
  const defaultMessage = STEPHEN_DEFAULT_MESSAGE;
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      className={"global-footer"}
      copyright={`${defaultMessage} ${currentYear}`}
      links={[
        {
          key: "Blog",
          title: AUTHOR_TITLE,
          href: STEPHEN_BLOG,
          blankTarget: true,
        },
        {
          key: "Github",
          title: <GithubOutlined />,
          href: GITHUB,
          blankTarget: true,
        },
        {
          key: "GITHUB",
          title: STEPHEN_DEFAULT_MESSAGE,
          href: GITHUB,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
