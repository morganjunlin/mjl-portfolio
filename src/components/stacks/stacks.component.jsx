import React, { Component } from 'react';

import './stacks.styles.scss';

const Stack = ({ technology, stacks }) => {
  return (
    <>
      <h3>
        {
          technology === 'Deployment' ? 'Deployment / Testing'
          : technology === 'Skills' ? 'Developer Skills'
          : technology
        }
      </h3>
      <div className='technology'>
        {stacks.map((stack, i) => (
          <div className='item'>
            <img className='icon' src={stack.image} /> <br />
            <span key={i}>{stack.name}</span>
          </div>
        ))}
      </div>
    </>
  )
};

class Stacks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stacks: {
        Frontend: [
          {
            name: 'Javascript (ES5 and ES6)',
            image: 'https://cdn.svgporn.com/logos/javascript.svg'
          },
          {
            name: 'HTML5',
            image: 'https://cdn.svgporn.com/logos/html-5.svg'
          },
          {
            name: 'CSS3',
            image: 'https://cdn.svgporn.com/logos/css-3.svg'
          },
          {
            name: 'React',
            image: 'https://cdn.svgporn.com/logos/react.svg'
          },
          {
            name: 'React Native',
            image: 'https://cdn.svgporn.com/logos/react.svg'
          } 
        ],
        Backend: [
          {
            name: 'Node.js',
            image: 'https://cdn.svgporn.com/logos/nodejs.svg'
          },
          {
            name: 'Express',
            image: 'https://cdn.svgporn.com/logos/express.svg'
          },
          {
            name: 'MongoDB',
            image: 'https://cdn.svgporn.com/logos/mongodb.svg'
          },
          {
            name: 'Mongoose',
            image: 'https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
          },
          {
            name: 'PostgreSQL',
            image: 'https://cdn.svgporn.com/logos/postgresql.svg'
          },
          {
            name: 'MySQL',
            image: 'https://cdn.svgporn.com/logos/mysql.svg'
          },
          {
            name: 'Sequelize',
            image: 'https://cdn.svgporn.com/logos/sequelize.svg'
          }
        ],
        Deployment: [
          {
            name: 'AWS EC2',
            image: 'https://cdn.svgporn.com/logos/aws-ec2.svg'
          },
          {
            name: 'AWS S3',
            image: 'https://cdn.svgporn.com/logos/aws-s3.svg'
          },
          {
            name: 'NGINX',
            image: 'https://cdn.svgporn.com/logos/nginx.svg'
          },
          {
            name: 'Heroku',
            image: 'https://cdn.svgporn.com/logos/heroku-icon.svg'
          },
          {
            name: 'Artillery',
            image: 'https://camo.githubusercontent.com/b386570e1c4595293de68557663ca47ac522b55c/68747470733a2f2f617274696c6c6572792e696f2f696d672f666c61672e706e67'
          },
          {
            name: 'loader',
            image: 'https://cdn.svgporn.com/logos/loader.svg'
          },
          {
            name: 'New Relic',
            image: 'https://newrelic.com/assets/newrelic/source/SVG/NR_logo_Horizontal.svg'
          }
        ],
        Skills: [
          {
            name: 'Git',
            image: 'https://cdn.svgporn.com/logos/github-icon.svg'
          },
          {
            name: 'yarn',
            image: 'https://cdn.svgporn.com/logos/yarn.svg'
          },
          {
            name: 'npm',
            image: 'https://cdn.svgporn.com/logos/npm-2.svg'
          },
          {
            name: 'Webpack',
            image: 'https://cdn.svgporn.com/logos/webpack.svg'
          },
          {
            name: 'Babel',
            image: 'https://cdn.svgporn.com/logos/babel.svg'
          },
          {
            name: 'Agile',
            image: 'https://azumo.co/wp-content/uploads/2018/08/illustration-agile-methogology.svg'
          },
          {
            name: 'Kanban',
            image: 'https://cdn.svgporn.com/logos/trello.svg'
          }
        ]
      }
    }
  }

  render() {
    const { stacks } = this.state;

    return (
      <section id='stacks' className='stacks'>
        <div className='container'>
          <h1>
            Technical Stacks
          </h1>

          {Object.entries(stacks).map(([technology, stacks], i) => <Stack key={i} technology={technology} stacks={stacks}/>)}
        </div>
      </section>
    )
  }
}

export default Stacks;