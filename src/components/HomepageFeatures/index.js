import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '地震速報',
    img: require('@site/static/img/top/features/eew.png').default,
    description: (
      <>
        強震モニタから提供されているリアルタイムの地震データを処理し、地震発生時に即座にメッセージを送信します。
      </>
    )
  },
  {
    title: '地震情報',
    img: require('@site/static/img/top/features/info.png').default,
    description: (
      <>
        発生した地震の情報を見やすい形式に加工し、メッセージを送信します。
      </>
    ),
  },
  {
    title: '津波情報',
    img: require('@site/static/img/top/features/tsunami.png').default,
    description: (
      <>
        気象庁から津波情報が発表された場合には、即座に津波情報に関するメッセージを送信します。
      </>
    ),
  },
]

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
