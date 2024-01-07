import { Outlet } from "react-router-dom";
import Footer from "@layouts/components/footer";
import Header from "@layouts/components/header";

import styles from "./index.module.scss";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PublicLayout;
