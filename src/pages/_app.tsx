import React from "react";
import { XProvider } from "@ant-design/x";
import type { AppProps } from "next/app";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <XProvider theme={theme}>
      {/* 只在客户端渲染组件，防止 Hydration 错误 */}
      <Component {...pageProps} />
    </XProvider>
  );
};

export default App;
