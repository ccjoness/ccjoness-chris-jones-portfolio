import { useEffect } from 'react';
import { Flex, Grid, Image, Paper, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import profileImage from '@/assets/img/chrisjones.jpg';
import classes from './AboutMe.module.css';

export function AboutMe() {
  const theme = useMantineTheme();

  const xs = useMediaQuery(`(min-width: ${theme.breakpoints.xs}) and (max-width: ${theme.breakpoints.sm})`);
  const sm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.md})`);
  const md = useMediaQuery(`(min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`);
  const lg = useMediaQuery(`(min-width: ${theme.breakpoints.lg}) and (max-width: ${theme.breakpoints.xl})`);
  const xl = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

  useEffect(() => {
    if (lg) {
      console.log('lg');
    }
    else if (md) {
      console.log('md');
    }
    else if (sm) {
      console.log('sm');
    }
    else if (xl) {
      console.log('xl');
    }
    else if (xs) {
      console.log('xs');
    }
  }, [lg, md, sm, xl, xs]);
  return (
    <Paper className={classes.paperHeight}>
      <div className={classes.textHxVCenter}>
        <Grid>
            <Grid.Col span={{xs: 12, sm: 12, md: 12, lg: 3, xl: 3}}>
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
            <Grid.Col span={{xs: 12, sm: 12, md: 12, lg: 9, xl: 9}}>
            <Flex
                h="100%"
                gap="0"
                justify="center"
                align="center"
                direction="column"
                wrap="nowrap"
            >
            <Text ta="left">
              Hello,
              <br />
              My name is Chris. I am a full-stack engineer and part-time entrepreneur based in
              Seattle, Washington. I enjoy the process of bringing an application from ideation to
              production.
            </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </div>
    </Paper>
  );
}
