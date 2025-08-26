import {Text, Paper} from '@mantine/core';
import classes from './Projects.module.css';

export function Projects() {

    return (
        <Paper className={classes.paperHeight}>
            <div className={classes.textHxVCenter}>
                <Text  ta="left" size="lg" maw={580} mx="auto" mt="xl">
                    Projects
                </Text>
            </div>

        </Paper>
    );
}
