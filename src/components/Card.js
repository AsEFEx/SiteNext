import Link from "next/link"

export default function Card({ title, image, description, route = "" }) {
    return <div className="span4">
        <div className=" card">
            {route == "" ?
                <>
                    <img src={image} />
                    <h2><strong>{title}</strong></h2>
                    <p>{description}</p>
                </>
                :
                <Link target="_blank" href={route}>
                    <img src={image} />
                    <h2><strong>{title}</strong></h2>
                    <p>{description}</p>
                </Link>
            }
        </div>
    </div>
}