import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Page() {
    return (
        <Layout title="招待">
            <BrowserOnly>
                {() => { window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=460323119651880960&permissions=2147772416&scope=bot%20applications.commands'}}
            </BrowserOnly>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '10vh',
                    fontSize: '20px',
                }}>
                <p>
                    Discordの招待ページにリダイレクトしています...
                </p>
            </div>
        </Layout>
    );
}

export default Page;