import {Text, Paper, Image, Flex, Grid} from '@mantine/core';
import classes from './AboutMe.module.css';
import profileImage from '@/assets/img/chrisjones.jpg';

export function AboutMe() {

    return (
        <Paper className={classes.paperHeight}>
            <div className={classes.textHxVCenter}>
                <Grid>
                    <Grid.Col span={3}>
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
                    <Grid.Col span={9}>
                        <Flex
                            h="100%"
                            gap="0"
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="nowrap"
                        >
                            <Text ta="left" fz="xl" maw={580}>
                                Hello,<br/>
                                My name is Chris. I am a full-stack engineer and part-time entrepreneur based in Seattle, Washington. I enjoy the process of bringing an application from ideation to production.
                            </Text>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </div>

        </Paper>
    );
}
