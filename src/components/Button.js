export const Button = ({type, font="16px", content, className, btnFunc}) => {
    return (
        <button className={className} style={{
            color: type === "primary" ? "#424242": "#e6cc00",
            backgroundColor: type === "primary" ? "#e6cc00":"#424242",
            fontSize: font,
            fontWeight: "bold",
            padding:"10px 20px",
            margin: "10% auto",
            borderRadius:"20px",
            cursor:"pointer"
            }}
            onClick={()=>{btnFunc()}}>

            <div>{content}</div>
        </button>
    )
}