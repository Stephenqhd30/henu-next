import React, { useState } from "react";
import { Button, Dropdown, Avatar, Space } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setLoginUser } from "@/store/modules";
import { useRouter } from "next/navigation";
import { userLogoutUsingPost } from "@/api/userController";
import { LoginRegisterModal } from "@/components/ReLogin";

export type AvatarDropdownProps = {
  currentUser?: API.LoginUserVO;
};

/**
 * 头像下拉框
 */
const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ currentUser }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  const loginOut = async () => {
    try {
      const res: any = await userLogoutUsingPost();
      if (res.code === 0 && res.data) {
        dispatch(setLoginUser({}));
        router.replace("/");
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const menuItems = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "退出登录",
    },
    {
      key: "center",
      icon: <HomeOutlined />,
      label: "个人中心",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "个人设置",
    },
  ];

  const handleMenuClick = async ({ key }: { key: string }) => {
    if (key === "logout") {
      await loginOut();
    } else {
      router.push(`/account/${key}`);
    }
  };

  return (
    <div>
      {currentUser?.id ? (
        <Dropdown
          menu={{ items: menuItems, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <Space>
            <Avatar src={currentUser?.userAvatar} icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      ) : (
        <>
          <Button
            type="text"
            size={"large"}
            onClick={() => setVisible(true)}
            icon={<UserSwitchOutlined />}
          />
          <LoginRegisterModal
            open={visible}
            onCancel={() => setVisible(false)}
          />
        </>
      )}
    </div>
  );
};

export default AvatarDropdown;
