function Hobby(props) {
   const { key, hobbyName } = props;
   return <h3 key={key}>{hobbyName}</h3>
}

export default Hobby