import {Divider, Drawer, ScrollArea} from "@mantine/core";
import segmentStyles from "@/widgets/header/ui/styles.module.css";
import React, {FunctionComponent} from "react";


export const Menu: FunctionComponent<{ opened: boolean, close: () => void }> = ({opened, close}) => {
    return (
        <Drawer
            opened={opened}
            onClose={close}
            size="100%"
            withCloseButton={false}
            zIndex={5}
            className={segmentStyles.hiddenDesktop}
        >
            <ScrollArea h="100vh" mt={50}>
                <Divider my="sm"/>
            </ScrollArea>
        </Drawer>
    );
};