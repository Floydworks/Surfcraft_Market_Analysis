interface TabProps {
  title: string;
}

function Tab({ title }: TabProps) {
  return <div>{title}</div>;
};

export default Tab;