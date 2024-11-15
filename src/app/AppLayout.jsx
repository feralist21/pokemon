import Layout from '@/shared/ui/Layout/Layout';
import { LayoutFooter } from '@/widgets/LayoutFooter';
import { LayoutHeader } from '@/widgets/LayoutHeader';

const AppLayout = () => {
    return <Layout headerSlot={<LayoutHeader />} footerSlot={<LayoutFooter />} />;
};

export { AppLayout };
