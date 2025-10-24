import { Outlet } from 'react-router-dom';
import AuthProvider from '@/+core/provider/AuthProvider';
import { Layout as LayoutAntDesign } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const { Content } = LayoutAntDesign;

export default function Layout() {
  return (
    <AuthProvider>
      <Content
        className='bg-primary-gray text-[#FFF] transition duration-500 ease-in-out w-full min-h-screen
                    flex flex-col'
      >
        <Header />
        <main className='w-full mt-[70px] flex-1'>
          <Outlet />
        </main>
        <Footer />
      </Content>
    </AuthProvider>
  );
}
