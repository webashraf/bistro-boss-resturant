import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    // const [menus, setMenus] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //   fetch("https://bistro-boss-server-mocha.vercel.app/menu")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setMenus(data);
    //       setLoading(false);
    //       // console.log(data);
    //     });
    // }, []);
    // return [menus, loading];

    const {data: menus = [], refetch, isLoading: loading} = useQuery({
      queryKey: ['menu'],
      queryFn: async() => {
        const res = await fetch("https://bistro-boss-server-mocha.vercel.app/menu")
        return res.json()
      }
    })


    return [menus, refetch, loading]

};

export default useMenu;