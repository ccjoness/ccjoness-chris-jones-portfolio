import { Flex, Grid, Image, Paper, Text } from '@mantine/core';
import profileImage from '@/assets/img/chrisjones.jpg';
import classes from './AboutMe.module.css';


export function AboutMe() {
  return (
    <Paper className={classes.paperHeight}>
      <div className={classes.textHxVCenter}>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}>
            <Flex
              h="100%"
              gap="md"
              justify="center"
              align="center"
              direction="column"
              wrap="nowrap"
            >
              <Image
                radius="xl"
                src={profileImage}
                alt="ProfileImage"
                height={200}
                w="auto"
                fit="contain"
              />
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}>
            <Flex h="100%" gap="0" justify="center" align="center" direction="column" wrap="nowrap">
              <Text mb={0} miw="100%">Hello!</Text>
              <Text mt={0}>
                I’m Chris Jones, a software engineer and technical leader with 10+ years of
                experience building cloud-native applications and scaling engineering teams. I’ve
                grown remote teams from the ground up, delivered secure platforms, and thrive at the
                intersection of engineering and leadership by designing systems, mentoring
                developers, and creating teams where people can do their best work. Outside of work,
                I enjoy music, woodworking, and exploring new creative projects that challenge me to
                learn and build in different ways.
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </div>
    </Paper>
  );
}
