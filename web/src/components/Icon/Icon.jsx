const Icon = ({ icon, fontSize, color }) => {

  const styleObj = {};
  if (color) styleObj.color = color
  if (fontSize) styleObj.fontSize = fontSize
  
  return (
    <i className={icon} style={styleObj}></i>
  )
}
export default Icon