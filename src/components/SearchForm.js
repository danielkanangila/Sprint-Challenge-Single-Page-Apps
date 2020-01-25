import React, { useState } from "react";
import { TextFieldWrapper, TextField, Label } from './ui-components';

const useStyle = {
  searchForm: {
    paddingTop: "5px"
  },
  paragraph: {
    margin: '0'
  }
}

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  const classes = useStyle;

  const handleChange = e => {
    setQuery(e.target.value)

    props.filter(e.target.value);
  }

  return (
    <section className="search-form" style={classes.searchForm}>
      <TextFieldWrapper>
        <Label>Filter</Label>
        <TextField onChange={handleChange} value={query} type="text" placeholder="search" />
      </TextFieldWrapper>
    </section>
  );
}
