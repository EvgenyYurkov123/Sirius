import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Flex } from "@chakra-ui/react";

interface LayoutProps {
    title?: string;
}

export const Layout: FC<LayoutProps> = () => {
    return (
        
            <Flex className={`${styles.contTainer}` }minH={'100vh'}>
                <Outlet />
            </Flex>
    );
};
