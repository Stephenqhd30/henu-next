import { Button, Result } from 'antd';
import React from 'react';
import Link from 'next/link';
import "./index.css";

/**
 * 无权限访问
 * @constructor
 */
const UnAccessiblePage: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to checkAccess this page."
    extra={
      <Link href="/">
        <Button type="primary">Back to home</Button>
      </Link>
    }
  />
);
export default UnAccessiblePage;
