import React from "react";
import { UserOutlined } from "@ant-design/icons";

import { Avatar, Space } from "antd";

export default function ImageProfile() {
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar size={200} icon={<UserOutlined />} />
    </Space>
  </Space>;
}
