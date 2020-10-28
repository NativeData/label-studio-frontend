import { types } from "mobx-state-tree";
import { toJS } from "mobx";

/**
 * Relation between two different nodes
 */

const MultiSelectionStore = types
  .model("MultiSelectionStore", {
    _regions: types.array(types.string),
  })
  .views(self => ({
    get regions() {
      return self._regions;
    },
  }))
  .actions(self => ({
    inside(region_id) {
      const theseRegions = toJS(self.regions);
      return theseRegions.includes(region_id);
    },
    addRegion(region_id) {
      self._regions.push(region_id);
      return region_id;
    },
    removeRegion(region_id) {
      self._regions = self._regions.filter(some_region => some_region !== region_id);
    },
    removeAllRegions() {
      self._regions.map(item => console.log(item));
      self._regions = [];
    },
  }));

export default MultiSelectionStore;
