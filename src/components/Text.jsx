function Text(props){
    return(
        <p style={{whiteSpace: 'pre-line'}} className={props.className}>{props.text}</p>
    );
}

export default Text