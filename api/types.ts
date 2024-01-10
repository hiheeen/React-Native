export interface Post {
  id: number;
  title: string;
  body: string;
}
export interface PostState {
  loading: string;
  data: Post[] | null;
  error: Error | null;
}
