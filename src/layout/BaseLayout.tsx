import { ReactElement, useEffect} from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { IUser } from '../types/Users'
import { useNavigate } from 'react-router-dom'

const BaseLayout = ({ component, usersData }: { component: ReactElement, usersData: IUser | null }) => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
        localStorage.removeItem("token")
        window.location.reload();
    }

    const items: MenuProps['items'] = [
        {
            label: <a href="#">Followers - {usersData?.followers?.total ??'loh'}</a>,
            key: '0',
        },
        {
            label:<a href="#">Country - {usersData?.country ??'no info'}</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label:'logout',
            key: '3',
            onClick: usersData ? () => logout() : undefined,
        },
    ];
    useEffect(() => {
        console.log(usersData?.images[0]?.url)
    })

    return (
        <div>
            <header className="header">
                <div className="header__history-nav">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.5425 19.302C12.1381 19.7064 12.1546 20.3669 12.5787 20.7506L23.2736 30.4269C23.7855 30.8901 24.576 30.8506 25.0392 30.3386C25.5023 29.8267 25.4628 29.0362 24.9509 28.5731L15.4253 19.9547L24.9961 10.3839C25.4843 9.89573 25.4843 9.10427 24.9961 8.61612C24.508 8.12796 23.7165 8.12796 23.2284 8.61612L12.5425 19.302Z"
                            fill="white"
                        />
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.0701 19.302C27.4745 19.7064 27.458 20.3669 27.0339 20.7506L16.339 30.4269C15.8271 30.8901 15.0366 30.8506 14.5735 30.3386C14.1103 29.8267 14.1498 29.0362 14.6617 28.5731L24.1873 19.9547L14.6165 10.3839C14.1283 9.89573 14.1283 9.10427 14.6165 8.61612C15.1046 8.12796 15.8961 8.12796 16.3843 8.61612L27.0701 19.302Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <div className="header__profile">
                        <img
                        src={usersData?.images[0]?.url ?? "https://images.unsplash.com/photo-1609866975749-2238afebfa27?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt=""
                        />
                        {usersData && <span>{usersData.display_name}</span>}
                        <DownOutlined />
                    </div>
                </Dropdown>
            </header>
            {component}
        </div>
    )
}

export default BaseLayout
