import {Layout, Menu} from 'antd';
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {getUserSelector} from '../redux/selectors';
import {useSelector} from 'react-redux';
import {DashboardOutlined} from '@ant-design/icons';
import {imageExporter} from '../assets/images';

const {Footer, Sider, Content} = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

export const DefaultLayout = ({children}) => {
	const [collapsed, setCollapsed] = useState(false);
	const location = useLocation();
	const [selectMenu, setSelectMenu] = useState(location.pathname);
	const userSelector = useSelector(getUserSelector);

	//Pages which will show sidebar menu
	const pageLocation = [
		'/dashboard',
		//add more pages here
	];

	//Menu sidebar items
	const items = [
		userSelector?.role == 'admin' && getItem('Dashboard', '/dashboard', <DashboardOutlined />),
		//add more items here
	];

	//handle save menu and redirect
	const handleClickMenuItem = (e) => {
		console.log('click ', e.key);
		setSelectMenu(e.key);
		navigate(e.key);
	};

	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sider
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
				theme="light"
				style={{
					display: pageLocation.includes(location.pathname) ? 'block' : 'none',
				}}
			>
				<Link to="/dashboard" style={{width: '200px', height: '100px'}}>
					<img
						style={{
							width: '100%',
							maxHeight: '100%',
							objectPosition: 'center',
							objectFit: 'cover',
						}}
						src={imageExporter.logo}
						alt="logo"
					></img>
				</Link>
				<Menu
					onClick={handleClickMenuItem}
					theme="light"
					defaultSelectedKeys={['1']}
					selectedKeys={[selectMenu]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout style={{backgroundColor: '#eaeaea'}}>
				<Content
					style={{
						margin: '16px',
						overflow: 'hidden',
						backgroundColor: '#ffffff',
					}}
				>
					<div
						style={{
							minHeight: 360,
						}}
					>
						{children}
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>
					SportLinker Admin Page ©{new Date().getFullYear()} Created by SportLinker Team
				</Footer>
			</Layout>
		</Layout>
	);
};
