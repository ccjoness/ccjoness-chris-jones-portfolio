import { IconBrowserMaximize } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import { ProjectCardInterface } from '@/Interfaces/project.interfaces';
import classes from './ProjectCard.module.css';

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
  tags,
}: ProjectCardInterface) {
  return (
    <Card className={classes.projectCard} mt="xs">
      <Card.Section ta="center">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </Card.Section>
      <Card.Section>
        <Center>
          <Image p="10px" src={image} h={150} w="auto" fit="contain" alt={imageAlt} />
        </Center>
      </Card.Section>

      <Card.Section p="10px" h="100px">
        <Text size="md" lineClamp={10}>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Text>
      </Card.Section>
      <Card.Section p="10px" h="100px">
        <Group justify="center" mt="md" mb="xs">
          {tags.map((tag, ind) => (
            <Badge
              color={tag.color ? tag.color : '#CC6547'}
              className={clsx(classes.tag, {
                [classes.tagHasUrl]: tag.url,
              })}
              key={ind}
              onClick={() => tag.url && window.open(tag.url, '_blank')}
            >
              <Group justify="center" gap="5px">
                {tag.name}
                {tag.url && <IconBrowserMaximize size={10} />}
              </Group>
            </Badge>
          ))}
        </Group>
      </Card.Section>
      <Card.Section p="10px">
        {buttonLink && buttonText && (
          <Button
            className={classes.projectLinkButton}
            fullWidth
            mt="md"
            radius="md"
            onClick={() => window.open(buttonLink, '_blank')}
          >
            <Group justify="center" gap="5px">
              {buttonText} <IconBrowserMaximize size={10} />
            </Group>
          </Button>
        )}
      </Card.Section>
    </Card>
  );
}
