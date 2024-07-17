import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import FloorpLogo from "/static/img/favicon.png"
import Link from "@docusaurus/core/lib/client/exports/Link";

import Translate, {translate} from '@docusaurus/Translate';

function DocsLabels() {
    return (
        <div className="sp_container">
            <div className="left-section">
                <h1>
                    <Translate>Floorp Docs</Translate>
                </h1>
                <p><Translate>Do you have any questions?</Translate></p>
                <div className="buttons">
                    <Link className="get-started" to="/docs">
                        <Translate>Get Started</Translate>
                    </Link>
                    <Link className="open-website" to='https://floorp.app'>
                        <Translate>Floorp Website</Translate>
                    </Link>
                </div>
            </div>
            <div className="right-section">
                <img src={FloorpLogo} alt="Floorp Logo" className="logo" />
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <Layout noFooter={true}>
            < DocsLabels />
        </Layout>
    );
}
