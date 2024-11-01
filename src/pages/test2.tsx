import { FC } from "react";

interface Test2Props {
  className?: string;
}
const Test2: FC<Test2Props> = (props) => {
  const { className } = props;
  return <div className={className}>test2222</div>;
};

export default Test2;
