import React from "react";
import { UploadOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  ConfigProvider,
  Avatar,
  Typography,
  Card,
  Flex,
  Button,
} from "antd";
import { Space } from "antd";
const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const cardStyle = {
  width: "fit-content",
  background: "#287B62",
  overflow: "hidden",
  borderRadius: 30,
};
const imgStyle = {
  display: "block",
  width: 128,
};
export const ProfilePage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          lineWidth: 0,
        },
        components: {
          Layout: {
            siderBg: "#F7F7F7",
          },
          Menu: {
            itemBg: "#F7F7F7",
            itemActiveBg: "#FFFFFF",
            itemSelectedBg: "#FFFFFF",
            itemHoverBg: "#FFFFFF",

            itemColor: "#42464D",
            itemHoverColor: "#42464D",
            itemSelectedColor: "#42464D",
          },
        },
      }}
    >
      <Layout style={{ height: "100%" }}>
        <Sider
          width={400}
          style={{ paddingLeft: 100, paddingTop: 30 }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Space direction="vertical">
            <Avatar size={128} icon={<UserOutlined />} />
            <Text strong style={{ fontSize: 24 }}>
              Linh
            </Text>
            <Text>English</Text>
            <Text type="success">
              <EditOutlined /> Chỉnh sửa
            </Text>
          </Space>

          <Menu
            style={{ marginTop: 30 }}
            className="menuItem"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                label: "My Journey",
              },
              {
                key: "2",
                label: "Kiểm tra & Kết quả",
              },
              {
                key: "3",
                label: "Tin Nhắn",
              },
              {
                key: "4",
                label: "Cài đặt",
              },
              {
                key: "5",
                label: "Đăng xuất",
              },
            ]}
          />
        </Sider>
        <Layout
          style={{
            background: "#FFFFFF",
          }}
        >
          <Content
            style={{
              padding: 24,
              textAlign: "left",
            }}
          >
            <div
              style={{
                height: "100%",
              }}
            >
              <Card
                hoverable
                style={cardStyle}
                styles={{
                  body: {
                    padding: 0,
                  },
                }}
              >
                <Flex gap={10} style={{ borderRadius: 100 }}>
                  <Flex
                    vertical
                    align="flex-start"
                    gap={20}
                    style={{
                      padding: 24,
                    }}
                  >
                    <Space
                      align="start"
                      direction="vertical"
                      style={{ width: "100%" }}
                    >
                      <Text strong style={{ color: "#FFFFFF" }}>
                        Thành tích hiện tại
                      </Text>
                      <Text strong style={{ color: "#FFFFFF" }}>
                        <Space align="center">
                          <img
                            alt="avatar"
                            src="/image/Group3.png"
                            //   style={imgStyle}
                          />
                          <Text
                            strong
                            style={{ color: "#FFFFFF", fontSize: 28 }}
                          >
                            Level B1
                          </Text>
                        </Space>
                      </Text>

                      <Text style={{ color: "#FFFFFF" }}>
                        Chinh phục đỉnh núi phải bắt đầu bằng từng bước chân.
                      </Text>
                    </Space>

                    <Button
                      size="large"
                      type="primary"
                      target="_blank"
                      style={{
                        background: "transparent",
                        border: "solid",
                        borderWidth: 1,
                      }}
                    >
                      Kiểm tra năng lực
                    </Button>
                  </Flex>
                  <div
                    style={{ padding: 10, paddingBottom: 40, paddingRight: 30 }}
                  >
                    <img
                      alt="avatar"
                      src="/image/image4.png"
                      //   style={imgStyle}
                    />
                  </div>
                </Flex>
              </Card>
              <Title level={2}>Lộ trình học của bạn</Title>
              <Text>
                Explore a visual representations of your academic progress
              </Text>

              <div
                style={{
                  width: 668,
                  height: 231,
                  marginTop: 15,
                  background: "#F7F7F7",
                  borderRadius: 12,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "inline-flex",
                    gap: 30,
                  }}
                >
                  <Space align="center" direction="vertical">
                    <Text strong>Đang cập nhập,...</Text>
                    <Text>Kiểm tra năng lực để cập nhập lộ trình</Text>
                  </Space>
                  <Button
                    type="primary"
                    style={{
                      height: 50,
                      paddingLeft: 50,
                      paddingRight: 50,
                      background: "#58CC02",
                    }}
                  >
                    Kiểm tra
                  </Button>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          background: "#FFFFFF",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </ConfigProvider>
  );
};
// export const ProfilePage = () => {
//   return (

//   );
// };
