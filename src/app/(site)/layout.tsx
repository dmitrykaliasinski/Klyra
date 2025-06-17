import {Web3Provider} from "@/lib/wagmiConfig";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({children}) {
    return (
        <>
            <Web3Provider>
                <div className='layout'>
                    <Header/>
                    <main className='main'>{children}</main>
                    <Footer/>
                </div>
            </Web3Provider>
        </>

    );
}
