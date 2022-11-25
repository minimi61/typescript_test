export interface DataProps {
  id: number;
  content: string;
  title: string;
  type: string;
  createdAt: number
}

export interface DataPropsArray {
  data: DataProps[]
}

