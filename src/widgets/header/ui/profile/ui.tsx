import {
    Anchor,
    Button,
    Group,
    MantineColorScheme,
    Menu,
    Modal,
    PasswordInput,
    TextInput,
    UnstyledButton,
    useMantineColorScheme
} from "@mantine/core";
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
import {useContext, useState} from "react";
import {AuthContext} from "@/shared/lib/auth";

const Profile = () => {
    const {setColorScheme, colorScheme} = useMantineColorScheme();
    const [menuOpened, {toggle, close}] = useDisclosure(false);
    const [authOpened, {open: authOpen, close: authClose}] = useDisclosure(false);

    const {isLoggedIn, login, logout} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


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


    const loginButton = (
        <>
            <Modal
                opened={authOpened}
                onClose={authClose}
                title="Вход"
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
                yOffset="20%">
                <TextInput label="Имя пользователя"
                           placeholder="username"
                           onChange={(val) => setUsername(val.currentTarget.value)}
                           required/>
                <PasswordInput label="Пароль"
                               placeholder="password"
                               required mt="md"
                               onChange={(val) => setPassword(val.currentTarget.value)}/>
                <Group justify="end" mt="lg">
                    <Anchor component="button" size="sm">
                        Забыли пароль?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl" type="submit"  onClick={() => login({username, password})}>
                    Войти в аккаунт
                </Button>
            </Modal>

            <Button onClick={authOpen} variant="default">Войти</Button>
        </>
    );

    const profileButton = (
        <Menu shadow="md" width={183} opened={menuOpened}>
            <Menu.Target>
                <IconUserCircle size="3.4rem" strokeWidth="1" onClick={toggle} style={{cursor: "pointer"}}/>
            </Menu.Target>

            <Menu.Dropdown ref={ref}>
                {ThemeMenu}
                <Menu.Divider/>
                <Menu.Item
                    color="red"
                    leftSection={<IconLogout className={styles.icon}/>}
                    onClick={logout}
                >
                    Выйти из аккаунта
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );

    return isLoggedIn ? profileButton : loginButton;
};

export {Profile};

