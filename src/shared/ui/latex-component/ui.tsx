import React, {FunctionComponent} from 'react';
import styles from "./styles.module.css";

// FIXME: дописать стили в файле latex.css

const LatexComponent: FunctionComponent<{ innerHTML: string }> = ({innerHTML}) => {
    return (
        <div className={styles.latexComponent} dangerouslySetInnerHTML={{__html: innerHTML}}></div>
    );
};

export {LatexComponent};