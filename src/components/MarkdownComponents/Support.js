import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

const Support = () => {
    return (
        <div>
            <h2><Translate>Need Support?</Translate></h2>
            <ul>
                <li><Link to="https://discord.floorp.app"><Translate>Discord (Floorp Projects)</Translate></Link></li>
                <li><Link to="https://x.com/Floorp_Browser">X (@Floorp_Browser)</Link></li>
                <li><Link to="https://reddit.com/r/Floorp">Reddit (r/Floorp)</Link></li>
                <li><Link to="https://misskey.io/@floorp@misskey.io">Misskey.io (@floorp@misskey.io)</Link></li>
            </ul>
        </div>
    );
};

export default Support;
