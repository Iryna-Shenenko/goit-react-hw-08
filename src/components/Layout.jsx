import { Suspense } from "react";

import  AppBox from '../components/AppBox/AppBox';

 const Layout = ({ children }) => {
    
    return (
        <div>
            <AppBox />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    );
};
 export default Layout;
