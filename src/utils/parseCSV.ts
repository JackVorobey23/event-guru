export const parseCSV = (content: string) => {
  const lines = content.split("\n");
  const headers = lines
    .shift()
    ?.split(",")
    .map((h) => h.trim());
  const data = lines.map((line) => line.split(","));
  const parsedData: Record<string, string>[] = [];
  data.forEach((row) => {
    const r = headers?.reduce((acc, key, index) => {
      acc[key] = row[index] || "";
      return acc;
    }, {} as Record<string, string>);
    if (r) {
      parsedData.push(r);
    }
  });
  return { data: parsedData };
};
