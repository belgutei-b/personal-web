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
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
