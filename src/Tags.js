const Tags = ({tags}) =>{
  return(
    <div className="tags">
      {tags.map(tag=> (
        <p className="tag"> #{tag}</p>
      )
    )
  }
    </div>
  );
}
export default Tags;
