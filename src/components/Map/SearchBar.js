import React, { Component } from "react";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import agent from "../../agent";
import {
  LOAD_SEARCH_SUGGESTIONS,
  SET_SUGGESTION_VALUE,
  SET_SELECTED_SUGGESTION,
  UNSET_SELECTED_SUGGESTION
} from "../../constants/actionTypes";

const getSuggestionValue = suggestion => {
  console.log(suggestion.properties.title);
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
  return value.trim().length > 3;
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.search
  };
};

const mapDispatchToProps = dispatch => ({
  loadSearchSuggestions: payload =>
    dispatch({ type: LOAD_SEARCH_SUGGESTIONS, payload }),
  setSearchValue: value => dispatch({ type: SET_SUGGESTION_VALUE, value }),
  setSelectedSuggestion: selectedFeature =>
    dispatch({ type: SET_SELECTED_SUGGESTION, selectedFeature }),
  clearSuggestions: () => dispatch({ type: UNSET_SELECTED_SUGGESTION })
});

class SearchBar extends Component {
  onSuggestionsFetchRequested = value => {
    const searchPromise = agent.Data.search;
    this.props.loadSearchSuggestions(searchPromise(value.value));
  };
  onSuggestionsClearRequested = () => {
    // this.props.clearSuggestions();
  };
  onSearchChange = (e, obj) => {
    this.props.setSearchValue(obj.newValue);
  };
  onSuggestionSelected = (e, o) => {
    this.props.setSearchValue(o.suggestionValue);
    this.props.setSelectedSuggestion(o.suggestion);
  };

  clearSearchInput = () => {
    this.props.clearSuggestions();
  };
  render() {
    const inputProps = {
      placeholder: "Search for a destination",
      value: this.props.value,
      onChange: this.onSearchChange
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
            suggestions={this.props.suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            shouldRenderSuggestions={shouldRenderSuggestions}
            inputProps={inputProps}
            onSuggestionSelected={this.onSuggestionSelected}
          />
          <IconButton>
            <FontIcon className={"fa fa-search"} />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
