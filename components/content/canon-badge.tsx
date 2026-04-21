type Canon = 'sruti' | 'smriti' | 'sutra' | 'purana' | 'itihasa';

type CanonBadgeProps = {
  canon: Canon;
};

const styles: Record<Canon, string> = {
  sruti:   'bg-saffron-50 text-saffron-600',
  smriti:  'bg-dharma-light text-dharma',
  sutra:   'bg-sandal-200 text-ink-muted',
  purana:  'bg-lotus-light text-lotus',
  itihasa: 'bg-sandal-200 text-ink-light',
};

const labels: Record<Canon, string> = {
  sruti:   'Śruti',
  smriti:  'Smṛti',
  sutra:   'Sūtra',
  purana:  'Purāṇa',
  itihasa: 'Itihāsa',
};

export function CanonBadge({ canon }: CanonBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-label ${styles[canon]}`}
    >
      {labels[canon]}
    </span>
  );
}
