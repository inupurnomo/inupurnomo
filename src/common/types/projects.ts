export interface ProjectItemProps {
  year: string;
  title: string;
  slug?: string;
  type: string;
  description: string;
  image: JSX.Element;
  demo?: string;
  github?: string;
  stacks: string[];
  content?: string;
  madeAt: string; 
  is_show?: boolean;
  is_featured?: boolean;
}

export interface ProjectsProps {
  index: number;
  project: ProjectItemProps;
}
