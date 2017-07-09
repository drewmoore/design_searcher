import React from 'react';

const FiltersForm = ({ q, offset, limit, sort, substrate, view, submit }) => (
  <div>
    <form onSubmit={submit}>
      <label htmlFor="q">Search Text:</label>
      <input id="q" name="q" type="text" defaultValue={q} />

      <label htmlFor="offset">Offset:</label>
      <input id="offset" name="offset" type="number" step="1" defaultValue={offset} />

      <label htmlFor="limit">Limit:</label>
      <input id="limit" name="limit" type="number" step="1" defaultValue={limit} />

      <label htmlFor="sort">Sort:</label>
      <select id="sort" name="sort" defaultValue={sort}>
        <option value="classic">Classic</option>
        <option value="freshtastic">Freshtastic</option>
        <option value="relevant">Relevant</option>
      </select>

      <label htmlFor="substrate">Substrate:</label>
      <select id="substrate" name="substrate" defaultValue={substrate}>
        <option value="any">Any</option>
        <option value="fabric">Fabric</option>
        <option value="wallpaper">Wallpaper</option>
        <option value="gift_wrap">Gift Wrap</option>
      </select>

      <label htmlFor="view">Image Requirements:</label>
      <select id="view" name="view" defaultValue={view}>
        <option>None</option>
        <option value="fabric">Fabric</option>
        <option value="project">Project</option>
      </select>

      <button type="submit">Update Filters</button>
    </form>
    <hr />
  </div>
);

export default FiltersForm;
