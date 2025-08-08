export const buildOptions = (items: Array<string | undefined | null>) => {
  const uniqueValues = Array.from(
    new Set(
      items
        .filter((v): v is string => !!v && v.trim() !== '')
        .map((v) => v.trim())
    )
  );

  return [
    { value: 'todas', label: 'Todas' },
    ...uniqueValues.map((v) => ({
      value: v.toLowerCase(),
      label: v,
    })),
  ];
};
