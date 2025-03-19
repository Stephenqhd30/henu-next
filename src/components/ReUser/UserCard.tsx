import React from "react";
import { StatisticCard } from "@ant-design/pro-card";
import { Image, Typography } from "antd";

interface Props {
  user: API.UserVO;
}

/**
 * 用户卡片
 * @constructor
 */
const UserCard: React.FC<Props> = (props) => {
  const { user } = props;
  return (
    <StatisticCard.Group direction={"column"} bodyStyle={{ padding: 0 }}>
      <StatisticCard
        layout={"center"}
        chart={<Image preview={false} src={user?.userAvatar} />}
        chartPlacement={"left"}
      />
      <StatisticCard
        bodyStyle={{ padding: 0 }}
        headStyle={{ padding: 0 }}
        title={
          <Typography.Text
            style={{
              fontSize: 20,
              fontWeight: 700,
            }}
            ellipsis={{
              tooltip: user?.userName,
              symbol: "...",
            }}
          >
            {user?.userName}
          </Typography.Text>
        }
      />
    </StatisticCard.Group>
  );
};

export default UserCard;
