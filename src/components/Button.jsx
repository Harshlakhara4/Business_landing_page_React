import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, onclick, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${
    px || "px-7" } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
 const spanClasses = "relative z-10"

  const renderButton = () => (
    <button className={classes} onClick={onclick}>
      <span className={spanClasses}> {children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderlink = () => (
    <a href={href} className={classes}>
       <span className={spanClasses}> {children}</span>
       {ButtonSvg(white)}

    </a>

  )
  return href
   ? renderlink()
   : renderButton();
};
 


export default Button;
