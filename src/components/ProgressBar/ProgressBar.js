const ProgressBar = (props) => {
    const { bgcolor, completed, scoreName } = props;
  
    const containerStyles = {
      height: 40,
      width: '50%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 25,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div classname="bar" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${scoreName}`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;