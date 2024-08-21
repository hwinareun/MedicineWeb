interface Props {
  warnText: string;
}

export const WarnText: React.FC<Props> = ({ warnText }) => {
  return <div className="self-end text-red-600 text-sm h-6">{warnText}</div>;
};
