import React, { useState } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import {
  CheckSquareOutlined,
  UserOutlined,
  EditOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
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
  Radio,
  Divider,
  Statistic,
} from "antd";
import { Space } from "antd";
const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const cardStyle = {
  width: "100%",
  // background: "#287B62",
  border: "solid #D1D5DB",
  borderWidth: 0.5,
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
  const [mode, setMode] = useState(1);

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
            defaultSelectedKeys={["2"]}
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
              {/* <Card
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
              </div> */}

              <Space
                size={"large"}
                direction="vertical"
                style={{ width: "100%" }}
              >
                <Radio.Group
                  buttonStyle={"solid"}
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                >
                  <Space size={"middle"}>
                    <Radio.Button
                      value={1}
                      type="primary"
                      size="large"
                      style={{
                        borderRadius: 30,
                        paddingLeft: 25,
                        paddingRight: 25,
                        height: 45,
                        lineHeight: "45px",
                        borderWidth: 1,
                      }}
                    >
                      Kiểm tra
                    </Radio.Button>
                    <Radio.Button
                      value={2}
                      ghost
                      type="primary"
                      size="large"
                      style={{
                        borderRadius: 30,
                        paddingLeft: 25,
                        paddingRight: 25,
                        height: 45,
                        lineHeight: "45px",
                        borderWidth: 1,
                      }}
                    >
                      Kết quả
                    </Radio.Button>
                  </Space>
                </Radio.Group>
                {mode === 1 && (
                  <Space
                    direction="vertical"
                    size={30}
                    style={{ width: "100%" }}
                  >
                    <Card
                      hoverable
                      style={cardStyle}
                      styles={{
                        body: {
                          padding: 20,
                        },
                      }}
                    >
                      <Flex
                        gap={30}
                        style={{
                          borderRadius: 100,
                        }}
                      >
                        <div
                          style={
                            {
                              // padding: 20,
                              // paddingBottom: 40,
                              // paddingRight: 30,
                            }
                          }
                        >
                          <img
                            alt="avatar"
                            src="/image/preview.png"
                            //   style={imgStyle}
                          />
                        </div>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={{
                            flexGrow: 1,
                          }}
                        >
                          <Space
                            align="start"
                            direction="vertical"
                            style={{ width: "100%" }}
                          >
                            <Text style={{}}>Ngày 21 tháng 2, 2024</Text>

                            <Text strong style={{ fontSize: 28 }}>
                              Đề kiểm tra trắc nghiệm
                            </Text>
                          </Space>

                          <Flex align="center" gap={10}>
                            <Avatar size={64} icon={<UserOutlined />} />
                            <Space direction="vertical">
                              <Text strong>Hằng</Text>
                              <Text>English Teacher</Text>
                            </Space>
                          </Flex>
                        </Flex>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={
                            {
                              // padding: 24,
                            }
                          }
                        >
                          <div>
                            <Text style={{}}>
                              <Text strong>40</Text> câu hỏi
                            </Text>
                            <Divider
                              type="vertical"
                              style={{ borderWidth: 1 }}
                            />
                            <Text style={{}}>
                              <Text strong>60</Text> phút
                            </Text>
                          </div>

                          <div
                            style={{
                              background: "#53B748",
                              padding: 5,
                              borderRadius: 10,
                            }}
                          >
                            <Button
                              size="large"
                              target="_blank"
                              style={{
                                // background: "transparent",
                                border: "solid",
                                // borderWidth: 1,
                                height: 50,
                                marginRight: 15,
                                fontWeight: 600,
                              }}
                            >
                              Làm kiểm tra
                            </Button>
                            <svg
                              style={{ marginRight: 10 }}
                              width="29"
                              height="16"
                              viewBox="0 0 29 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 15L26.25 9.75L27.2929 8.70711C27.6834 8.31658 27.6834 7.68342 27.2929 7.29289L21 1"
                                stroke="#1C1C1C"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                              <path
                                d="M21 8L1.75 8"
                                stroke="#1C1C1C"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </Flex>
                      </Flex>
                    </Card>
                    <Card
                      hoverable
                      style={cardStyle}
                      styles={{
                        body: {
                          padding: 20,
                        },
                      }}
                    >
                      <Flex gap={30} style={{ borderRadius: 100 }}>
                        <div
                          style={
                            {
                              // padding: 20,
                              // paddingBottom: 40,
                              // paddingRight: 30,
                            }
                          }
                        >
                          <img
                            alt="avatar"
                            src="/image/preview1.png"
                            //   style={imgStyle}
                          />
                        </div>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={{
                            flexGrow: 1,
                          }}
                        >
                          <Space
                            align="start"
                            direction="vertical"
                            style={{ width: "100%" }}
                          >
                            <Text style={{}}>Ngày 21 tháng 2, 2024</Text>

                            <Text strong style={{ fontSize: 28 }}>
                              Đề kiểm tra trắc nghiệm
                            </Text>
                          </Space>

                          <Flex align="center" gap={10}>
                            <Avatar size={64} icon={<UserOutlined />} />
                            <Space direction="vertical">
                              <Text strong>Hằng</Text>
                              <Text>English Teacher</Text>
                            </Space>
                          </Flex>
                        </Flex>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={
                            {
                              // padding: 24,
                            }
                          }
                        >
                          <div>
                            <Text style={{}}>
                              <Text strong>40</Text> câu hỏi
                            </Text>
                            <Divider
                              type="vertical"
                              style={{ borderWidth: 1 }}
                            />
                            <Text style={{}}>
                              <Text strong>60</Text> phút
                            </Text>
                          </div>

                          <div
                            style={{
                              background: "#53B748",
                              padding: 5,
                              borderRadius: 10,
                            }}
                          >
                            <Button
                              size="large"
                              target="_blank"
                              style={{
                                // background: "transparent",
                                border: "solid",
                                // borderWidth: 1,
                                height: 50,
                                marginRight: 15,
                                fontWeight: 600,
                              }}
                            >
                              Làm kiểm tra
                            </Button>
                            <svg
                              style={{ marginRight: 10 }}
                              width="29"
                              height="16"
                              viewBox="0 0 29 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 15L26.25 9.75L27.2929 8.70711C27.6834 8.31658 27.6834 7.68342 27.2929 7.29289L21 1"
                                stroke="#1C1C1C"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                              <path
                                d="M21 8L1.75 8"
                                stroke="#1C1C1C"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </Flex>
                      </Flex>
                    </Card>
                  </Space>
                )}
                {mode === 2 && (
                  <Space
                    direction="vertical"
                    size={30}
                    style={{ width: "100%" }}
                  >
                    <Card
                      hoverable
                      style={cardStyle}
                      styles={{
                        body: {
                          padding: 20,
                        },
                      }}
                    >
                      <Flex gap={30} style={{ borderRadius: 100 }}>
                        <div
                          style={{
                            // padding: 20,
                            // paddingBottom: 40,
                            // paddingRight: 30,
                            flexGrow: 0.2,
                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {/* <img
                            alt="avatar"
                            src="/image/preview.png"
                            //   style={imgStyle}
                          /> */}
                          <Title level={2}>8.0</Title>
                          <Text>Điểm</Text>
                        </div>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={{
                            flexGrow: 1,
                          }}
                        >
                          <Space
                            align="start"
                            direction="vertical"
                            style={{ width: "100%" }}
                          >
                            <Text style={{}}>Ngày 21 tháng 2, 2024</Text>

                            <Text strong style={{ fontSize: 28 }}>
                              Đề kiểm tra trắc nghiệm
                            </Text>
                          </Space>

                          <Flex align="center" gap={10}>
                            <Avatar size={64} icon={<UserOutlined />} />
                            <Space direction="vertical">
                              <Text strong>Hằng</Text>
                              <Text>English Teacher</Text>
                            </Space>
                          </Flex>
                        </Flex>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={
                            {
                              // padding: 24,
                            }
                          }
                        >
                          <Space direction="vertical">
                            <div>
                              <Text style={{}}>
                                <Text strong>40</Text> câu hỏi
                              </Text>
                              <Divider
                                type="vertical"
                                style={{ borderWidth: 1 }}
                              />
                              <Text style={{}}>
                                <Text strong>60</Text> phút
                              </Text>
                            </div>
                            <Space>
                              <Space
                                style={{
                                  background: "#3FB335",
                                  padding: 5,
                                  borderRadius: 5,
                                  color: "white",
                                  width: 60,
                                }}
                              >
                                <CheckSquareOutlined
                                  style={{ fontSize: "16px", color: "white" }}
                                />
                                42
                              </Space>
                              <Space
                                style={{
                                  background: "#EF5B59",
                                  padding: 5,
                                  borderRadius: 5,
                                  color: "white",
                                  width: 60,
                                }}
                              >
                                <CheckSquareOutlined
                                  style={{ fontSize: "16px", color: "white" }}
                                />
                                8
                              </Space>
                            </Space>
                          </Space>

                          <Space
                            style={{
                              color: "#53B748",
                              padding: 5,
                              borderRadius: 10,
                            }}
                          >
                            <CloudDownloadOutlined />
                            Tải đáp án
                          </Space>
                        </Flex>
                      </Flex>
                    </Card>
                    <Card
                      hoverable
                      style={cardStyle}
                      styles={{
                        body: {
                          padding: 20,
                        },
                      }}
                    >
                      <Flex gap={30} style={{ borderRadius: 100 }}>
                        <div
                          style={{
                            // padding: 20,
                            // paddingBottom: 40,
                            // paddingRight: 30,
                            flexGrow: 0.2,
                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {/* <img
                            alt="avatar"
                            src="/image/preview.png"
                            //   style={imgStyle}
                          /> */}
                          <Title level={2}>8.0</Title>
                          <Text>Điểm</Text>
                        </div>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={{
                            flexGrow: 1,
                          }}
                        >
                          <Space
                            align="start"
                            direction="vertical"
                            style={{ width: "100%" }}
                          >
                            <Text style={{}}>Ngày 21 tháng 2, 2024</Text>

                            <Text strong style={{ fontSize: 28 }}>
                              Đề kiểm tra trắc nghiệm
                            </Text>
                          </Space>

                          <Flex align="center" gap={10}>
                            <Avatar size={64} icon={<UserOutlined />} />
                            <Space direction="vertical">
                              <Text strong>Hằng</Text>
                              <Text>English Teacher</Text>
                            </Space>
                          </Flex>
                        </Flex>
                        <Flex
                          vertical
                          align="flex-start"
                          justify="space-between"
                          gap={20}
                          style={
                            {
                              // padding: 24,
                            }
                          }
                        >
                          <Space direction="vertical">
                            <div>
                              <Text style={{}}>
                                <Text strong>40</Text> câu hỏi
                              </Text>
                              <Divider
                                type="vertical"
                                style={{ borderWidth: 1 }}
                              />
                              <Text style={{}}>
                                <Text strong>60</Text> phút
                              </Text>
                            </div>
                            <Space>
                              <Space
                                style={{
                                  background: "#3FB335",
                                  padding: 5,
                                  borderRadius: 5,
                                  color: "white",
                                  width: 60,
                                }}
                              >
                                <CheckSquareOutlined
                                  style={{ fontSize: "16px", color: "white" }}
                                />
                                42
                              </Space>
                              <Space
                                style={{
                                  background: "#EF5B59",
                                  padding: 5,
                                  borderRadius: 5,
                                  color: "white",
                                  width: 60,
                                }}
                              >
                                <CheckSquareOutlined
                                  style={{ fontSize: "16px", color: "white" }}
                                />
                                8
                              </Space>
                            </Space>
                          </Space>

                          <Space
                            style={{
                              color: "#53B748",
                              padding: 5,
                              borderRadius: 10,
                            }}
                          >
                            <CloudDownloadOutlined />
                            Tải đáp án
                          </Space>
                        </Flex>
                      </Flex>
                    </Card>
                  </Space>
                )}
              </Space>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer
        style={{
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
