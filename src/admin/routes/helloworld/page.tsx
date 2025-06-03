import { defineRouteConfig } from "@medusajs/admin-sdk"
import { PhotoSolid } from "@medusajs/icons"
import { Container} from "@medusajs/ui"
import { useEffect } from "react"



const HelloWorldPage = () => {

    useEffect(() => {
        

        fetch("/admin/helloworld", {
            credentials: "include"
        })
        .then((res) => res.json())
        .then(({ message }) => {
            console.log(message)
        })
        .catch((error) => {
            console.error("Error fetching hello world message:", error);
        });
    }, [])
  
  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <h1> Hello World Admin</h1>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Hello World",
  icon: PhotoSolid,
})

export default HelloWorldPage
