import {Text, Paper} from '@mantine/core';
import classes from '@/styles/global.module.css';

export function Contact() {

    return (
        <Paper className={classes.paperHeight}>
            <div className={classes.textHxVCenter}>
                <Text  ta="left" size="lg" maw={580} mx="auto" mt="xl">
                   Contact
                </Text>
            </div>
        </Paper>
    );
}
