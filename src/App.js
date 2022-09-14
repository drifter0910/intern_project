import { Col, Row } from 'antd';
import './App.scss';
function App() {
  const projectsArray = [
    {
      name: 'NFT landing page',
      link: 'https://drifter0910-ntf-landing-page.netlify.app/',
      img: 'https://user-images.githubusercontent.com/78606852/175220220-10d433dc-a6cc-4380-a827-0a9da1bbfe74.png',
    },
    {
      name: '29 Mini Projects',
      link: 'https://drifter0910-29projectsjs.netlify.app/',
      img: 'https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fa339b9249dc2cce4b4c1fb4738a7a23c%2F8cee7da4%2FScreen_Shot_2020-04-13_at_8.57.42_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Df71dc75c7f19f0f6&w=3840&q=75',
    },
    {
      name: 'Music player',
      link: 'https://roaring-caramel-0e9c77.netlify.app/',
      img: 'https://static-zmp3.zmdcdn.me/skins/common/logo600.png',
    },
    {
      name: 'Note App',
      link: 'https://sparkly-speculoos-d02a25.netlify.app/',
      img: 'https://50projects50days.com/img/projects-img/33-notes-app.png',
    },
  ];
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero-desc">
          <h1>ReactJs Projects</h1>
          <p style={{ fontSize: '1.3rem' }}>
            Projects are the most practical way to learn any language, and{' '}
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                textDecoration: 'underline',
                textDecorationColor: 'yellow',
                fontStyle: 'italic',
                letterSpacing: '4px',
              }}
            >
              ReactJs
            </span>{' '}
            is no exception. Solidify your knowledge of Javascript by creating these cool projects.
          </p>
        </div>
        <div className="home__hero-img">
          <img
            src={'https://www.vanillajavascriptprojects.com/_next/static/media/hero-2.cbb732ba.svg'}
            alt=""
          />
        </div>
      </div>
      <div className="home__projects">
        <div className="home__after">Intern Projects</div>
        <div className="home__projects-list">
          <Row gutter={[32, 32]} style={{ maxWidth: '1140px', margin: 'auto' }}>
            {projectsArray.map((project) => (
              <Col
                className="home__card"
                style={{ cursor: 'pointer' }}
                lg={8}
                md={12}
                sm={12}
                key={project.name}
              >
                <a href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                  <img
                    style={{
                      width: '100%',
                      minHeight: '185px',
                      maxHeight: '185px',
                    }}
                    src={project.img}
                    alt=""
                  />
                  <h3 style={{ padding: '1rem', backgroundColor: 'white' }}>{project.name}</h3>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
