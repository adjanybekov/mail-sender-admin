import React from "react";
import "./index.css";
export const TagsInput = (props) => {
  const [tags, setTags] = React.useState(props.tags);
  const [tag, setTag] = React.useState(null);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addTags(e);
      setTag(null);
    } else if (e.key === "Backspace") {
      if (tag == null && tags.length > 0) {
        removeTags(tags.length - 1);
      } else if (tag == "") {
        setTag(null);
      }
    }
  };
  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        className="input-class form-control"
        type="text"
        onKeyUp={handleKeyUp}
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
        placeholder="Add email & press Enter"
      />
    </div>
  );
};
