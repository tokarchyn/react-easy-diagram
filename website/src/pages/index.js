import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Customization',
    description: (
      <>
        The library was designed from the ground up to be easily customizable so
        you can change any component you like or customize existing ones.
      </>
    ),
  },
  {
    title: 'HTML nodes',
    description: (
      <>
        Nodes are represented as <code>HTML</code>, so you can define them at any 
        level of complexity. (Because of this, if expected nodes number exceeds 
        hundreds of them then it is better to use libraries with other approaches, 
        for example diagrams that use Canvas).
      </>
    ),
  },
  {
    title: 'Advanced API',
    description: (
      <>
        Entire diagram state with all its methods and types are available so you
        are aware about everything that is going on in library and can
        manipulate the state as you want.
      </>
    ),
  },
  {
    title: 'Performance',
    description: (
      <>
        Thanks to <code>MobX</code> all components are rerendered only when it
        strictly needed.
      </>
    ),
  },
  {
    title: 'Touch devices support',
    description: (
      <>
        User interaction is implemented with helps of <code>UseGesture</code> library 
        that enables you to use diagrams not only on PC but also on
        touch devices, use pinch & zoom gesture.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Build highly customazible React diagrams`}
      description='Open source library to build highly customazible interactive React diagrams with easy.'
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.headerContainer}>
          <div className='container'>
            <h1 className={clsx('hero__title', styles.title)}>
              {siteConfig.title}
            </h1>
            <p className={clsx('hero__subtitle', styles.subtitle)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary', styles.getStarted)}
                to={useBaseUrl('docs/')}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className={styles.headerDemoImage}>
            <img src='img/demo.png' />
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
