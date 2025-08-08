export type FilterProps = {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
};
