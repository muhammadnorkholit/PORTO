export default function formatApi({ data }) {
  return data?.data?.map((d) => ({
    id: d.id,
    ...d.attributes,
  }));
}
