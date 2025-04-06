import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useUser() {
    const { data, error, isLoading, mutate } = useSWR("/api/user/me", fetcher)

    return {
        user: data,
        isLoading,
        isError: error,
        mutate,
    }
}

export default useUser;