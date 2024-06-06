import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

interface LayoutProps {
    title?: string;
}

export const Layout: FC<LayoutProps> = ({ title }) => {
    return (
        <>
            <div className={`${styles.container}`}>
                {title && <h1 className="">{title}</h1>}
                <Outlet />
            </div>
        </>
    );
};
