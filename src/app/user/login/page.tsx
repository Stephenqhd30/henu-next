"use client";

import React from "react";
import { LoginForm, ProForm, ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { userLoginUsingPost } from "@/api/userController";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import "./index.css";
import { setLoginUser } from "@/store/modules";
import {LOGO, STEPHEN_SUBTITLE, TITLE} from '@/constants';
import { DEFAULT_USER } from "@/mock/user";

/**
 * 用户登录页面
 */
const UserLoginPage: React.FC = () => {
  const [form] = ProForm.useForm();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  /**
   * 提交
   * @param values
   */
  const doSubmit = async (values: any) => {
    try {
      const res: any = await userLoginUsingPost(values);
      if (res.code === 0 && res.data) {
        message.success("登录成功！");
        // 保存用户登录态
        localStorage.setItem("henu-next-token", res.data.token);
        dispatch(setLoginUser(res.data));
        router.replace("/");
        form.resetFields();
      } else {
        message.error("登录失败，" + res.message);
        dispatch(setLoginUser(DEFAULT_USER));
      }
    } catch (e: any) {
      message.error("登录失败，" + e.message);
      dispatch(setLoginUser(DEFAULT_USER));
    }
  };

  return (
    <div id="userLoginPage">
      <LoginForm<API.UserAddRequest>
        form={form}
        logo={
          <Image
            src={LOGO}
            alt={TITLE}
            width={44}
            height={44}
          />
        }
        title={TITLE}
        subTitle={STEPHEN_SUBTITLE}
        onFinish={doSubmit}
        submitter={{
          searchConfig: {
            submitText: "登录",
          },
        }}
      >
        <ProFormText
          name="userAccount"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined />,
          }}
          placeholder={"请输入用户账号"}
          rules={[
            {
              required: true,
              message: "请输入用户账号!",
            },
          ]}
        />
        <ProFormText.Password
          name="userPassword"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined />,
          }}
          placeholder={"请输入密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
            textAlign: "end",
          }}
        >
          还没有账号？
          <Link prefetch={false} href={"/user/register"}>
            去注册
          </Link>
        </div>
      </LoginForm>
    </div>
  );
};

export default UserLoginPage;
