import React, {FunctionComponent} from 'react';

const LatexComponent: FunctionComponent<{ innerHTML: string }> = ({innerHTML}) => {
    return (
        <div className="latexComponent" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
    );
};

export {LatexComponent};