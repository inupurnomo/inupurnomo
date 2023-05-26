import { PostType } from './post';

export interface MetaProps
  extends Pick<PostType, 'tags' | 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
