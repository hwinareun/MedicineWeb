import clsx from 'clsx';

interface Props {
  warnText: string;
  success?: boolean;
}

export const WarnText: React.FC<Props> = ({ warnText, success }) => {
  return (
    <div
      className={clsx(
        'self-end text-sm h-6',
        success && 'text-green-600',
        !success && 'text-red-600'
      )}
    >
      {warnText}
    </div>
  );
};
