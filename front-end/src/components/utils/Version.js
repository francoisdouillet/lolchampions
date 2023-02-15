export default function Version() {
    const [version, setVersion] = useState("");

    useEffect(() => {
        fetch(
            "https://ddragon.leagueoflegends.com/api/versions.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((response) => setVersion(response[0]));
    }, []);

    return version;
}