import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

const Support = () => {
    return (
        <div>
            <h2><Translate>Need Support?</Translate></h2>
            <ul>
                <li><Link to="https://discord.gg/AblazeCommunity"><Translate>Discord (Ablaze Community)</Translate></Link></li>
                <li><Link to="https://twitter.com/Ablaze_MIRAI">X (@Ablaze_MIRAI)</Link></li>
                <li><Link to="https://twitter.com/Floorp_Browser">X (@Floorp_Browser)</Link></li>
                <li><Link to="https://reddit.com/r/Floorp">Reddit (r/Floorp)</Link></li>
                <li><Link to="https://misskey.io/@floorp@misskey.io">Misskey.io (@floorp@misskey.io)</Link></li>
                <li><Link to="https://support.ablaze.one/contact"><Translate>Contact Us</Translate></Link></li>
            </ul>
        </div>
    );
};

export default Support;
