import {Group} from "@mantine/core";
import React from "react";
import {items} from "@/widgets/header/ui/nav/config";
import styles from "./styles.module.css";
import segmentStyles from "@/widgets/header/ui/styles.module.css";

const Nav = () => {
    return (
        <Group style={{height: '100%'}} gap={10} className={segmentStyles.hiddenMobile}>
            {items.map(
                (item) => (
                    <a
                        key={item.text}
                        href={item.href}
                        className={styles.link}
                        onClick={(event) => event.preventDefault()}
                    >
                        {item.text}
                    </a>
                )
            )}
        </Group>
    );
};

export {Nav};