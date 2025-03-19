"use client";

import React, { useCallback, useEffect } from "react";
import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import { Provider, useDispatch } from "react-redux";
import { getLoginUserUsingGet } from "@/api/userController";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import store, { AppDispatch } from "@/store";
import { setLoginUser } from "@/store/modules";

/**
 * 全局初始化逻辑
 * @param children
 * @constructorpnp
 */
const InitializeStatus: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch<AppDispatch>();
  /**
   * 全局初始数，有单词调用的代码，都可以写到这里
   */
  const doInitLoginUser = useCallback(async () => {
    const res: any = await getLoginUserUsingGet();
    if (res.code === 0 && res.data) {
      // 更新全局用户状态
      dispatch(setLoginUser(res.data as API.LoginUserVO));
    }
  }, []);

  useEffect(() => {
    doInitLoginUser();
  }, []);
  return children;
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Provider store={store}>
            <InitializeStatus>
              <BasicLayout>{children}</BasicLayout>
            </InitializeStatus>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
