import Navegacion from "../nav/Navegacion"
import "./home.css"
import Ciudad from "../../assets/ciudad.png"

function Home(){
    return (
        <div>
            <Navegacion/>
            <h1>Home</h1>
            <img className="image-home" src={Ciudad} alt="Ciudad" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed provident ut ullam fugiat aperiam, veritatis magni cupiditate magnam cumque sequi temporibus laboriosam ducimus quod a alias nesciunt est, eum ad?
            Eius dignissimos magni rem itaque enim saepe est ipsam nisi, eaque ea beatae recusandae a nulla repellat exercitationem aspernatur explicabo reiciendis corrupti perspiciatis perferendis eligendi placeat maxime officia eveniet. Reprehenderit!
            Atque velit veniam quia. Tempore, aliquid inventore. Sed molestiae vero dolorum exercitationem odit quas explicabo magni adipisci rerum! Rem sint maxime, aut quis architecto corrupti illo doloribus ratione ut ab!
            Eligendi ipsa cupiditate quaerat, omnis expedita harum molestiae adipisci deleniti velit eos aperiam illo, quos accusantium debitis sapiente voluptate dolorum odio, distinctio ducimus. Tenetur quibusdam nesciunt sit, ab distinctio in?
            Odit totam nesciunt alias. Maiores sint illum eos officiis quibusdam repudiandae facere qui nisi numquam quam esse explicabo aliquid, necessitatibus, tempore doloribus distinctio temporibus corporis! Velit ipsa possimus officia ipsam.</p>
            <h2>Aprendiendo a automatizar deploy</h2>        
        </div>
    )
}

export default Home