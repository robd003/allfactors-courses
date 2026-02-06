import { useEffect, useState } from 'react';

interface LocalizedTimeRangeProps {
  startUtc?: string;
  endUtc?: string;
  suffix?: string;
  fallback?: string;
}

export function LocalizedTimeRange({ startUtc, endUtc, suffix, fallback }: LocalizedTimeRangeProps) {
  const [label, setLabel] = useState(fallback ?? '');

  useEffect(() => {
    if (!startUtc || !endUtc) {
      setLabel(fallback ?? '');
      return;
    }

    const startDate = new Date(startUtc);
    const endDate = new Date(endUtc);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      setLabel(fallback ?? '');
      return;
    }

    const timeFormatter = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });

    const timeWithZoneFormatter = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    const range = `${timeFormatter.format(startDate)} - ${timeWithZoneFormatter.format(endDate)}`;
    setLabel(suffix ? `${range} ${suffix}` : range);
  }, [startUtc, endUtc, suffix, fallback]);

  return <span>{label}</span>;
}
