import {Anchor, Text, Title, Paper} from '@mantine/core';
import classes from './AboutMe.module.css';
import {useViewportSize} from '@mantine/hooks';

export function AboutMe() {

    return (
        <Paper className={classes.paperHeight}>
            <div className={classes.textHxVCenter}>
                <Text  ta="left" size="lg" maw={580} mx="auto" mt="xl">
                    Hello,<br />
                    My name is Chris. I am a full-stack engineer and part-time entrepreneur based in Seattle, Washington. I enjoy the process of bringing an application from ideation to production.
                </Text>
            </div>

        </Paper>
    );
}
