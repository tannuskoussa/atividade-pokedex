export default function Axios() {
    const [state, setState] = useState<'loading' | 'error' | 'done' | null>(
        null
    );
    const [pokemon, setPokemon] = useState<Pokemon | null>();

    useEffect(() => {
        setState('loading');
        fetchPokemon('bulbasaur')
            .then((p) => setPokemon(p))
            .then(() => setState('done'))
            .catch((e: Error | AxiosError) => setState('error'));
    }, []);
    if (!pokemon || state === 'loading')
        return (
            <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
                <Loading />
            </div>
        );
    if (state === 'error')
        return (
            <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
                <Error />
            </div>
        );
    return (
        <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
            <PokemonCard {...pokemon} />
        </div>
    );
}
