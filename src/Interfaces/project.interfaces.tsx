export interface TagInterface {
  name: string;
  color?: string;
  url?: string;
}

export interface ProjectCardInterface {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  buttonLink?: string;
  tags: TagInterface[];
}