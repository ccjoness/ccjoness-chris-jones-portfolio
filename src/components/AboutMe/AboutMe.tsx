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
              <Text ta="left">
                Hello, I'm Chris Jones.
                <Text mt="md">
                  I have been passionate about technology since childhood. When my family first got
                  a computer, I was fascinated by how websites worked. At 13, I started teaching
                  myself web development by studying the source code of sites I admired. Soon after,
                  I began building websites for family and friends' businesses, and by the time I
                  was 18, I landed my first tech job.
                </Text>
                <Text mt="md">
                  In addition to technology, I am passionate about music and woodworking. I enjoy
                  attending small venues to discover new bands, and as a woodworker, I particularly
                  enjoy woodturning. Crafting something beautiful on the lathe brings me immense
                  joy.
                </Text>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </div>
    </Paper>
  );
}
