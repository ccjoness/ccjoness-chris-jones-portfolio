import classes from "@/styles/global.module.css";
import {Badge, Button, Card, Group, Image, Text} from "@mantine/core";

export function ProjectCard({title, description, image, imageAlt, buttonText, buttonLink, tags}: { title: string, description: string, image: string, imageAlt: string, tags: string[], buttonText: string, buttonLink: string }) {
    return (
        <div className={classes.textHxVCenter}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="center" mt="xs" mb="xs">
                    <h3>{title}</h3>
                </Group>
                <Card.Section>
                    <Image
                        src={image}
                        height={160}
                        alt={imageAlt}
                    />
                </Card.Section>
                <Group justify="center" mt="md" mb="xs">
                    {tags.map((tag) => (
                        <Badge color="pink" key={tag}>
                            {tag}
                        </Badge>
                    ))}
                </Group>
                <Text size="sm" c="dimmed">
                    {description}
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" onClick={() => window.open(buttonLink, '_blank')}>
                    {buttonText}
                </Button>
            </Card>
        </div>
    );
}