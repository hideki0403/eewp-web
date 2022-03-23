import React from 'react';
import NotFound from '@theme-original/NotFound';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function NotFoundWrapper(props) {
  return (
    <>
      <Layout title="ページが見つかりませんでした">
        <BrowserOnly>
          {() => { 
            setTimeout(() => { window.location.href = '/'}, 5000)
          }}
        </BrowserOnly>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            fontSize: '20px',
          }}>
          <span>ページが見つかりませんでした。トップページにリダイレクトします。</span>
        </div>
      </Layout>
    </>
  );
}
