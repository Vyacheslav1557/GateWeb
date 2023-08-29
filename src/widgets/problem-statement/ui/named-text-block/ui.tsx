import React, {FunctionComponent} from 'react';
import {Stack} from "@mantine/core";
import {LatexComponent} from "@/shared/ui";
import classes from "./styles.module.css";

const NamedTextBlock: FunctionComponent<{ title: string, text: string }> = ({title, text}) => {
    if (!text)
        return <></>;

    return (
        <Stack gap={0} className={classes.Block}>
            <h6 className={classes.title}>{title}</h6>
            <LatexComponent innerHTML={text}/>
        </Stack>
    );
};

export {NamedTextBlock};