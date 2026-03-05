import { useNumberAnimation } from '@/hooks/useNumberAnimation';

interface NumberCounterProps {
  target: number;
  label: string;
  duration?: number;
  delay?: number;
  decimals?: number;
  className?: string;
}

const NumberCounter = ({
  target,
  label,
  duration = 2000,
  delay = 0,
  decimals = 0,
  className = '',
}: NumberCounterProps) => {
  const { formattedValue, ref, isAnimating } = useNumberAnimation(target, {
    duration,
    delay,
    decimals,
  });

  return (
    <div ref={ref} className={`transition-all duration-300 ${className}`}>
      <h3 className='text-3xl font-bold font-body flex justify-center text-white mb-2'>
        {label}
      </h3>

      <p className='text-white/60 text-xl flex justify-center leading-relaxed'>
        {isAnimating ? formattedValue : '0'}+
      </p>
    </div>
  );
};

export default NumberCounter;
