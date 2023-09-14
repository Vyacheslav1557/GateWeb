import {ActionIcon, CopyButton, Tooltip} from '@mantine/core';
import {IconCheck, IconCopy} from '@tabler/icons-react';
import {FunctionComponent} from "react";

const CustomCopyButton: FunctionComponent<{ valueToCopy: string }> = ({valueToCopy}) => {
    return (
        <CopyButton value={valueToCopy}>
            {({copied, copy}) => (
                <Tooltip label={copied ? 'Скопировано' : 'Скопировать'} withArrow position="right">
                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                        {copied ? (
                            <IconCheck style={{width: "1.2rem"}}/>
                        ) : (
                            <IconCopy style={{width: "1.2rem"}}/>
                        )}
                    </ActionIcon>
                </Tooltip>
            )}
        </CopyButton>
    );
};

export {CustomCopyButton};