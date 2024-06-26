type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  courseId: string | undefined;
  week: number | undefined;
  publish: boolean;
};

type BlogPost = {
  code: string,
  frontmatter: Meta
};
