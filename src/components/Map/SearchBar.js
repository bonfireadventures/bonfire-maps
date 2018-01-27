import React from "react";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Autosuggest from "react-autosuggest";

const getSuggestionValue = suggestion => {
  return suggestion.properties.title;
};

const renderSuggestion = suggestion => {
  return (
    <div>
      <i className="fa fa-map-marker" aria-hidden="true" />
      <span>{suggestion.properties.title}</span>
    </div>
  );
};

const shouldRenderSuggestions = value => {
  return value.trim().length > 2;
};

const SearchBar = props => {
  const inputProps = {
    placeholder: "Search for a destination",
    value: props.value,
    onChange: props.onSearchChange
  };
  return (
    <Toolbar
      className="mui-toolbar"
      noGutter
      style={{
        /* Must be defined here to override material-ui inline styles*/
        backgroundColor: "#fff",
        height: "48px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02)",
        borderRadius: "2px"
      }}
    >
      <ToolbarGroup>
        <Autosuggest
          suggestions={props.suggestions}
          onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={props.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          inputProps={inputProps}
          onSuggestionSelected={props.onSuggestionSelected}
        />
        <IconButton>
          <FontIcon className={"fa fa-search"} />
        </IconButton>
      </ToolbarGroup>
    </Toolbar>
  );
};

export default SearchBar;
