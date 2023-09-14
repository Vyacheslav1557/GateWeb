import {Group, MantineColorScheme, Menu, UnstyledButton, useMantineColorScheme} from "@mantine/core";
import {
    IconAdjustmentsCheck,
    IconBrush,
    IconCheck,
    IconLogout,
    IconMoon,
    IconSun,
    IconUserCircle
} from '@tabler/icons-react';
import styles from "./styles.module.css";
import {useClickOutside, useDisclosure} from "@mantine/hooks";

const Profile = () => {
    const {setColorScheme, colorScheme} = useMantineColorScheme();
    const [opened, {toggle, close}] = useDisclosure(false);

    const ref = useClickOutside(() => close());

    const addIconCheck = (cs: MantineColorScheme) => {
        if (cs == colorScheme)
            return <IconCheck className={styles.icon}/>;
        return <></>;
    };


    const ThemeMenu = (
        <Menu shadow="md" width={140} position="left">
            <Menu.Target>
                <UnstyledButton style={{width: "100%"}} px={12} py={6} className={styles.theme}>
                    <Group gap={10}>
                        <IconBrush className={styles.icon}/>
                        <div style={{fontSize: "14px"}}>Тема</div>
                    </Group>
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item
                    leftSection={<IconSun className={styles.icon}/>}
                    onClick={() => setColorScheme("light")}
                    rightSection={addIconCheck("light")}>
                    Светлая
                </Menu.Item>
                <Menu.Item
                    closeMenuOnClick
                    leftSection={<IconMoon className={styles.icon}/>}
                    onClick={() => setColorScheme("dark")}
                    rightSection={addIconCheck("dark")}>
                    Тёмная
                </Menu.Item>
                <Menu.Item
                    closeMenuOnClick
                    leftSection={<IconAdjustmentsCheck className={styles.icon}/>}
                    onClick={() => setColorScheme("auto")}
                    rightSection={addIconCheck("auto")}>
                    Системная
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );


    return (
        <Menu shadow="md" width={183} opened={opened}>
            <Menu.Target>
                <IconUserCircle size="3.4rem" strokeWidth="1" onClick={toggle}/>
            </Menu.Target>

            <Menu.Dropdown ref={ref}>
                {ThemeMenu}
                <Menu.Divider/>
                <Menu.Item
                    color="red"
                    leftSection={<IconLogout className={styles.icon}/>}
                >
                    Выйти из аккаунта
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export {Profile};

