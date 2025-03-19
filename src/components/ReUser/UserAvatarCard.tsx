import React from "react";
import { Avatar, Typography } from "antd";
import {StatisticCard} from '@ant-design/pro-components';

interface Props {
  user: API.UserVO;
}

/**
 * 用户头像卡片
 * @constructor
 */
const UserAvatarCard: React.FC<Props> = (props) => {
  const { user } = props;
  return (
    <StatisticCard
      bodyStyle={{
        padding: 4,
      }}
      statistic={{
        title: user.userName,
        valueRender: () => (
          <Typography.Text
            style={{
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.45)",
            }}
          >
            {"一起长大的约定 那样真心"}
          </Typography.Text>
        ),
        valueStyle: {
          fontSize: 13,
        },
      }}
      chart={<Avatar size={48} src={user.userAvatar} alt={user.userName} />}
      chartPlacement="left"
    />
  );
};

export default UserAvatarCard;
