import Link from "next/link";

interface Route{
    path: string;
    name: string;
}

interface Props {
    pathNames: Route[];
}

function Navigator(props: Props) {
  return (
    <div style={{ display: "flex", gap: "15px", flexDirection: "row"  }}>
        {
            props.pathNames.map((pathName) => 
            <Link className="bg-fuchsia-800 text-white hover:bg-sky-300" key={pathName.path} href={pathName.path}>
                {pathName.name}
            </Link>
            )
        }
    </div>
  )
}

export default Navigator