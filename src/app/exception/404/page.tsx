import { Button, Result } from 'antd';
import React from 'react';
import Link from 'next/link';
import "./index.css";

/**
 * 404页面
 * @constructor
 */
const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle={'抱歉，您访问的页面不存在。'}
    extra={
      <Link href="/">
        <Button type="primary">Back to home</Button>
      </Link>
    }
  />
);
export default NoFoundPage;
