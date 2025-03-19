"use client";

import React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Col, Grid, Row } from "antd";
import { AuthorCard, BannerTitle, MomentShow } from "@/components/ReHome";

const { useBreakpoint } = Grid;
/**
 *
 * @constructor
 */
const HomePage: React.FC = () => {
  const scene = useBreakpoint();
  const isMobile = !scene.md;
  return (
    <PageContainer title={false}>
      <Row
        className="flex justify-center items-center"
        gutter={isMobile ? 0 : 16}
      >
        <Col span={isMobile ? 24 : 14}>
          <BannerTitle />
        </Col>
        <Col span={isMobile ? 24 : 10}>
          <AuthorCard />
        </Col>
      </Row>
      <MomentShow />
    </PageContainer>
  );
};

export default HomePage;
