import { api } from "../services/api";
import { queryClient } from "../services/queryClient";

const handlePrefetchCountry = async (name: string) => {
  queryClient.prefetchQuery(["countryInfo", name], async () => {
    const { data } = await api.get(`/name/${name}`, {
      params: {
        fullText: true,
      },
    });
    return data;
  });
};

export { handlePrefetchCountry };

