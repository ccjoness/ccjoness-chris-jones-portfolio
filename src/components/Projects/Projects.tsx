import { Center, Grid, Paper } from '@mantine/core';
import stellariq from '@/assets/img/StellarIQ_Logo.svg';
import novalink from '@/assets/img/novalink_logo_150x150.png';
import { ProjectCardInterface } from '@/Interfaces/project.interfaces';
import classes from '@/styles/global.module.css';
import { ProjectCard } from './components/ProjectCard';


const projectCards: ProjectCardInterface[] = [
  {
    title: "Stellar<span style='color: #3878a6'>IQ</span>",
    description:
      "Stellar<span style='color: #3878a6'>IQ</span> is a proof of concept financial analysis platform providing real-time market data, technical indicators, and intelligent trading signals for both cryptocurrency and equity markets.",
    image: stellariq,
    imageAlt: 'StellarIQ Logo - Star with ring',
    buttonText: 'View Project at Github',
    buttonLink: 'https://github.com/ccjoness/StellarIQ',
    tags: [
      {
        name: 'React Native',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'FastAPI',
        url: 'https://fastapi.tiangolo.com/',
      },
      {
        name: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
      },
      {
        name: 'Redis ',
        url: 'https://redis.io/',
      },
      {
        name: 'Expo',
        url: 'https://expo.dev/',
      },
    ],
  },
  {
    title: 'Nova Link',
    description:
      'Nova Link is a modern remote desktop application built with Python backends and Electron frontends, using direct WebRTC connections without requiring a signaling server.',
    image: novalink,
    imageAlt: 'NovaLink Logo - Link with ring',
    buttonText: 'View Project at Github',
    buttonLink: 'https://github.com/ccjoness/NovaLink',
    tags: [
      {
        name: 'WinPython',
        url: 'https://winpython.github.io/',
      },
      {
        name: 'Electron',
        url: 'https://www.electronjs.org/',
      },
      {
        name: 'WebRTC',
      },
    ],
  },
];
export function Projects() {
  return (
    <Paper className={classes.paperHeight}>
      <div>
        <Center>
          <h1>Projects</h1>
        </Center>
      </div>
      <Grid justify="center" align="center">
        {projectCards &&
          projectCards.map((card, index) => (
            <Grid.Col span={4} key={index}>
              <ProjectCard
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                imageAlt={card.imageAlt}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                tags={card.tags}
              />
            </Grid.Col>
          ))}
      </Grid>
    </Paper>
  );
}
