import React, { useState } from "react";
import { Modal, message } from "antd";
import { LoginForm, ProForm, ProFormText } from "@ant-design/pro-form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { userLoginUsingPost } from "@/api/userController";
import { userRegisterUsingPost } from "@/api/userController";
import Image from "next/image";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { setLoginUser } from "@/store/modules";
import { LOGO, MOTTO, TITLE } from "@/constants";

interface LoginRegisterModalProps {
  open: boolean;
  onCancel: () => void;
}

/**
 * 用户登录和注册弹框
 */
const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({
  open,
  onCancel,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = ProForm.useForm();
  const dispatch = useDispatch<AppDispatch>();

  // 登录框提交
  const doLoginSubmit = async (values: any) => {
    try {
      const res: any = await userLoginUsingPost(values);
      if (res.code === 0 && res.data) {
        message.success("登录成功！");
        localStorage.setItem("henu-next-token", res.data.token);
        dispatch(setLoginUser(res.data));
        form.resetFields();
        onCancel(); // 关闭模态框
      } else {
        message.error("登录失败，" + res.message);
      }
    } catch (e: any) {
      message.error("登录失败，" + e.message);
    }
  };

  // 注册框提交
  const doRegisterSubmit = async (values: any) => {
    try {
      const res = await userRegisterUsingPost(values);
      if (res.data) {
        message.success("注册成功，请登录");
        setIsLogin(true);
      }
    } catch (e: any) {
      message.error("注册失败，" + e.message);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      className="rounded-xl shadow-lg"
    >
      {isLogin ? (
        <div className="p-8 space-y-6">
          <LoginForm
            form={form}
            logo={<Image src={LOGO} alt={TITLE} width={44} height={44} />}
            title={TITLE}
            subTitle={MOTTO}
            onFinish={doLoginSubmit}
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
                className: "rounded-lg border-gray-300",
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
                className: "rounded-lg border-gray-300",
              }}
              placeholder={"请输入密码"}
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
              ]}
            />
            <div className="text-right">
              <span
                className="text-sm text-blue-600 cursor-pointer"
                onClick={() => setIsLogin(false)} // 切换到注册框
              >
                去注册
              </span>
            </div>
          </LoginForm>
        </div>
      ) : (
        <div className="p-8 space-y-6">
          <LoginForm
            form={form}
            logo={<Image src={LOGO} alt={TITLE} width={44} height={44} />}
            title={TITLE}
            subTitle={MOTTO}
            onFinish={doRegisterSubmit}
            submitter={{
              searchConfig: {
                submitText: "注册",
              },
            }}
          >
            <ProFormText
              name="userAccount"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined />,
                className: "rounded-lg border-gray-300",
              }}
              placeholder={"请输入用户账号"}
              rules={[
                {
                  required: true,
                  message: "请输入用户账号！",
                },
              ]}
            />
            <ProFormText.Password
              name="userPassword"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined />,
                className: "rounded-lg border-gray-300",
              }}
              placeholder={"请输入密码"}
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
              ]}
            />
            <ProFormText.Password
              name="checkPassword"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined />,
                className: "rounded-lg border-gray-300",
              }}
              placeholder={"确认密码"}
              rules={[
                {
                  required: true,
                  message: "请再次输入密码！",
                },
              ]}
            />
            <div className="text-right">
              <span
                className="text-sm text-blue-600 cursor-pointer"
                onClick={() => setIsLogin(true)} // 切换到登录框
              >
                已有账号？去登录
              </span>
            </div>
          </LoginForm>
        </div>
      )}
    </Modal>
  );
};

export default LoginRegisterModal;
