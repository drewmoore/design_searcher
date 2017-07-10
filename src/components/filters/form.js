import React from 'react';

const FiltersForm = ({ q, offset, limit, sort, substrate, view, submit }) => (
  <form onSubmit={submit}>
    <div className="row pad-top">
      <div className="col-xs-12 col-sm-4">
        <div className="form-group">
          <label htmlFor="q">Search Text:</label>
          <input id="q" name="q" type="text" defaultValue={q} className="form-control" />
        </div>
      </div>

      <div className="col-xs-6 col-sm-4">
        <div className="form-group">
          <label htmlFor="offset">Offset:</label>
          <input
            id="offset"
            name="offset"
            type="number"
            step="1"
            defaultValue={offset}
            className="form-control"
          />
        </div>
      </div>

      <div className="col-xs-6 col-sm-4">
        <div className="form-group">
          <label htmlFor="limit">Limit:</label>
          <input
            id="limit"
            name="limit"
            type="number"
            step="1"
            defaultValue={limit}
            className="form-control"
          />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-6 col-sm-4">
        <div className="form-group">
          <label htmlFor="sort">Sort:</label>
          <select id="sort" name="sort" defaultValue={sort} className="form-control">
            <option value="classic">Classic</option>
            <option value="freshtastic">Freshtastic</option>
            <option value="relevant">Relevant</option>
          </select>
        </div>
      </div>

      <div className="col-xs-6 col-sm-4">
        <div className="form-group">
          <label htmlFor="substrate">Substrate:</label>
          <select id="substrate" name="substrate" defaultValue={substrate} className="form-control">
            <option value="any">Any</option>
            <option value="fabric">Fabric</option>
            <option value="wallpaper">Wallpaper</option>
            <option value="gift_wrap">Gift Wrap</option>
          </select>
        </div>
      </div>

      <div className="col-xs-6 col-sm-4">
        <div className="form-group">
          <label htmlFor="view">Additional Images Included:</label>
          <select id="view" name="view" defaultValue={view} className="form-control">
            <option>None</option>
            <option value="fabric">Fabric</option>
            <option value="project">Project</option>
          </select>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Update Filters</button>
        </div>
      </div>
    </div>
  </form>
);

export default FiltersForm;
