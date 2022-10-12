import React from "react";

const StackableGrid = () => {
  return (
    <div className="stackable-grid">
      <div className="half-segment">
        <div className="ui-half">Content</div>
        <div className="ui-half">Content</div>
      </div>
      <div className="quarter-segment">
        <div className="ui-quart">Content</div>
        <div className="ui-quart">Content</div>
        <div className="ui-quart">Content</div>
      </div>
      <div className="dividable-sgment">
        <div className="ui-divide">Content</div>
        <div className="ui-divide">Content</div>
      </div>
    </div>
  );
};

export default StackableGrid;
