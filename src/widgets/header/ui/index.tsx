import {Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Logo} from "@/widgets/header/ui/logo";
import {Nav} from "@/widgets/header/ui/nav";
import {Menu} from "@/widgets/header/ui/menu";
import {Profile} from "@/widgets/header/ui/profile";
import segmentStyles from "./styles.module.css";
import React from "react";

export function Header() {
    const [opened, {close, toggle}] = useDisclosure(false);

    return (
        <>
            <Group justify="space-between" style={{height: '100%'}} className={segmentStyles.header}>
                <Burger opened={opened} onClick={toggle} className={segmentStyles.hiddenDesktop}/>
                <Logo/>
                <Nav/>
                <Profile/>
            </Group>
            <Menu opened={opened} close={close}/>
        </>
    );
}