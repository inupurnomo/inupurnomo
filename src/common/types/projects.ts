export interface ProjectItemProps {
  title: string;
  slug?: string;
  type: string;
  description: string;
  image: JSX.Element;
  tags: string[];
  link_demo?: string;
  link_github?: string;
  stacks?: string[];
  content?: string;
  is_show?: boolean;
  is_featured?: boolean;
}

export interface ProjectsProps {
  index: number;
  project: ProjectItemProps;
}
