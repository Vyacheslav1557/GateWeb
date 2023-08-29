import {Menu, useMantineColorScheme} from "@mantine/core";
import {
    IconAdjustmentsCheck,
    IconBrush,
    IconCheck,
    IconLogout,
    IconMoon,
    IconSearch,
    IconSun,
    IconUserCircle
} from '@tabler/icons-react';
import styles from "./styles.module.css";

const ThemeMenu = () => {
    const {setColorScheme, colorScheme} = useMantineColorScheme();

    const addIconCheck = (cs: string) => {
        if (cs == colorScheme)
            return <IconCheck className={styles.icon}/>;
        return <></>;
    };

    return (
        <Menu shadow="md" width={200} trigger="hover" position="left">
            <Menu.Target>
                <Menu.Item leftSection={<IconBrush className={styles.icon}/>}>
                    Тема
                </Menu.Item>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    leftSection={<IconSun className={styles.icon}/>}
                    rightSection={addIconCheck("light")}
                    onClick={() => setColorScheme('light')}>
                    Светлая
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconMoon className={styles.icon}/>}
                    rightSection={addIconCheck("dark")}
                    onClick={() => setColorScheme('dark')}>
                    Тёмная
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconAdjustmentsCheck className={styles.icon}/>}
                    rightSection={addIconCheck("auto")}
                    onClick={() => setColorScheme('auto')}>
                    Системная
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

const Profile = () => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <IconUserCircle size="3.4rem" strokeWidth="1"/>
            </Menu.Target>

            <Menu.Dropdown>
                <ThemeMenu/>
                <Menu.Item
                    leftSection={<IconSearch className={styles.icon}/>} rightSection="CTRL+K">
                    Поиск
                </Menu.Item>
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

