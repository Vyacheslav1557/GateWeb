import {Group} from '@mantine/core';
import {FunctionComponent} from "react";
import classes from "./styles.module.css";

const GroupNav: FunctionComponent<{
    title: string,
    subtitle: string[],
}> = ({
          title,
          subtitle,
      }) => {

    return (
        <Group className={classes.status} gap={4}>
            <a style={{fontWeight: "600", padding: "6px 0px 6px 0px"}} href={`../../../`}>{title}</a>
            {subtitle.map((item, index) =>
                <a href={`../`}
                   key={index}
                   style={{fontWeight: "500", padding: "2px 0px 2px 0px"}}>
                    {item}
                </a>)}
        </Group>
    );
};

export {GroupNav};