import Image from "next/image"
import Link from "next/link"

export default function Card({ title, image, alt = "", description, route = "" }) {
    return <div className="span4">
        <div className=" card">
            {route == "" ?
                <>
                    <Image src={image} alt={alt} width={1000} height={1000} />
                    <h2><strong>{title}</strong></h2>
                    <p>{description}</p>
                </>
                :
                <Link target="_blank" href={route}>
                    <Image src={image} alt={alt} width={1000} height={1000} />
                    <h2><strong>{title}</strong></h2>
                    <p>{description}</p>
                </Link>
            }
        </div>
    </div>
}