import {Text, Paper, Grid, Center, Card, Image, Badge, Button, Group} from '@mantine/core';
import classes from '@/styles/global.module.css';
import {ProjectCard} from './components/ProjectCard';

export function Projects() {

    return (
        <Paper className={classes.paperHeight}>
            <div>
                <Center>
                    <h1>Projects</h1>
                </Center>
            </div>
            <Grid justify="center" align="center">
                <Grid.Col span={4}>
                    <ProjectCard
                        title="Cat ipsum dolor sit amet"
                        description="Cat ipsum dolor sit amet, trip owner up in kitchen i want food. Roll over and sun my belly scream at teh bath so sleep on dog bed, force dog to sleep on floor. Flex claws on the human's belly and purr like a lawnmower spend all night ensuring people don't sleep sleep all day wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i love cuddles. Cat cat moo moo lick ears lick paws. Steal raw zucchini off kitchen counter cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog, and i like big cats and i can not lie."
                        image="https://placehold.co/160"
                        imageAlt="Cat ipsum dolor sit amet"
                        buttonText="View Project"
                        buttonLink="https://www.google.com"
                        tags={['React', 'TypeScript', 'Mantine', "foo", "bar", "baz"]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard
                        title="Cat ipsum dolor sit amet"
                        description="Cat ipsum dolor sit amet, trip owner up in kitchen i want food. Roll over and sun my belly scream at teh bath so sleep on dog bed, force dog to sleep on floor. Flex claws on the human's belly and purr like a lawnmower spend all night ensuring people don't sleep sleep all day wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i love cuddles. Cat cat moo moo lick ears lick paws. Steal raw zucchini off kitchen counter cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog, and i like big cats and i can not lie."
                        image="https://placehold.co/160"
                        imageAlt="Cat ipsum dolor sit amet"
                        buttonText="View Project"
                        buttonLink="https://www.google.com"
                        tags={['React', 'TypeScript', 'Mantine', "foo", "bar", "baz"]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard
                        title="Cat ipsum dolor sit amet"
                        description="Cat ipsum dolor sit amet, trip owner up in kitchen i want food. Roll over and sun my belly scream at teh bath so sleep on dog bed, force dog to sleep on floor. Flex claws on the human's belly and purr like a lawnmower spend all night ensuring people don't sleep sleep all day wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i love cuddles. Cat cat moo moo lick ears lick paws. Steal raw zucchini off kitchen counter cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog, and i like big cats and i can not lie."
                        image="https://placehold.co/160"
                        imageAlt="Cat ipsum dolor sit amet"
                        buttonText="View Project"
                        buttonLink="https://www.google.com"
                        tags={['React', 'TypeScript', 'Mantine', "foo", "bar", "baz"]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard
                        title="Cat ipsum dolor sit amet"
                        description="Cat ipsum dolor sit amet, trip owner up in kitchen i want food. Roll over and sun my belly scream at teh bath so sleep on dog bed, force dog to sleep on floor. Flex claws on the human's belly and purr like a lawnmower spend all night ensuring people don't sleep sleep all day wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i love cuddles. Cat cat moo moo lick ears lick paws. Steal raw zucchini off kitchen counter cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog, and i like big cats and i can not lie."
                        image="https://placehold.co/160"
                        imageAlt="Cat ipsum dolor sit amet"
                        buttonText="View Project"
                        buttonLink="https://www.google.com"
                        tags={['React', 'TypeScript', 'Mantine', "foo", "bar", "baz"]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard
                        title="Cat ipsum dolor sit amet"
                        description="Cat ipsum dolor sit amet, trip owner up in kitchen i want food. Roll over and sun my belly scream at teh bath so sleep on dog bed, force dog to sleep on floor. Flex claws on the human's belly and purr like a lawnmower spend all night ensuring people don't sleep sleep all day wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i love cuddles. Cat cat moo moo lick ears lick paws. Steal raw zucchini off kitchen counter cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog, and i like big cats and i can not lie."
                        image="https://placehold.co/160"
                        imageAlt="Cat ipsum dolor sit amet"
                        buttonText="View Project"
                        buttonLink="https://www.google.com"
                        tags={['React', 'TypeScript', 'Mantine', "foo", "bar", "baz"]}
                    />
                </Grid.Col>
            </Grid>


        </Paper>
    );
}
