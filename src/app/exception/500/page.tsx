import { Button, Result } from "antd";
import React from "react";
import Link from "next/link";
import "./index.css";

/**
 * 500页面
 * @constructor
 */
const ServerErrorPage: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Link href="/">
        <Button type="primary">Back to home</Button>
      </Link>
    }
  />
);

export default ServerErrorPage;
