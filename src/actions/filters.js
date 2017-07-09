export default class FiltersActions {
  static get UPDATE_FILTERS() { return 'UPDATE_FILTERS'; }

  static update(filters) {
    return {
      type:    this.UPDATE_FILTERS,
      filters: filters
    };
  }
}
