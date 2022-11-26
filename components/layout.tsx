import Alert from "./alert";
import Footer from "./footer";
import Menu from "./header-original";
import Meta from "./meta";

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                {/* <Alert preview={preview} /> */}
                <Menu />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
